'use client'

// Vehicle Ownership Transfer Screen with Digital Signature
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
  SectionTitle,
} from '@/components/ui';

const OwnershipTransferScreen: React.FC = () => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToTransfer, setAgreedToTransfer] = useState(false);
  const [agreedToDisposal, setAgreedToDisposal] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = theme.colors.primary;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.nativeEvent.offsetX;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.nativeEvent.offsetY;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.nativeEvent.offsetX;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.nativeEvent.offsetY;

    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHasSignature(false);
      }
    }
  };

  const handleSubmit = () => {
    if (canSubmit) {
      // In real app, save signature and transfer data
      console.log('Ownership transfer authorized');
      router.push('/order-timeline');
    }
  };

  const canSubmit = hasSignature && agreedToTerms && agreedToTransfer && agreedToDisposal;

  return (
    <ScreenContainer>
      <ScrollableContent bottomPadding={120}>
        {/* Header */}
        <div style={{
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.md,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.md,
        }}>
          <button
            onClick={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.surfaceLight,
              border: `1px solid ${theme.colors.borderLight}`,
            }}
          >
            <Icon name="arrow_back" size={24} color={theme.colors.textPrimary} />
          </button>
          <div>
            <h1 style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
            }}>
              Transfer Authorization
            </h1>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              Digital consent & signature
            </p>
          </div>
        </div>

        {/* Warning Banner */}
        <div style={{ padding: `0 ${theme.spacing.lg}`, marginBottom: theme.spacing.lg }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.alertOrange, 0.1),
            border: `1px solid ${withOpacity(theme.colors.alertOrange, 0.3)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="info" size={20} color={theme.colors.alertOrange} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Legal Authorization Required
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  By signing below, you authorize Scrap2Go to process your vehicle for scrapping and handle JPJ deregistration on your behalf.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Vehicle Details */}
        <div style={{ padding: theme.spacing.lg, paddingTop: 0 }}>
          <SectionTitle title="Vehicle Information" />
          
          <Card>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: theme.spacing.md,
            }}>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginBottom: 4,
                }}>
                  Registration
                </p>
                <p style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                }}>
                  WXX 1234
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginBottom: 4,
                }}>
                  Make & Model
                </p>
                <p style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                }}>
                  Proton Saga 1.3
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginBottom: 4,
                }}>
                  Year
                </p>
                <p style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                }}>
                  2010
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginBottom: 4,
                }}>
                  Valuation
                </p>
                <p style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.primary,
                }}>
                  RM 850
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Consent Checkboxes */}
        <div style={{ padding: theme.spacing.lg, paddingTop: 0 }}>
          <SectionTitle title="Authorization & Consent" />

          <Card>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.md,
            }}>
              {/* Transfer Ownership */}
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.spacing.sm,
                cursor: 'pointer',
              }}>
                <input
                  type="checkbox"
                  checked={agreedToTransfer}
                  onChange={(e) => setAgreedToTransfer(e.target.checked)}
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 2,
                    cursor: 'pointer',
                    accentColor: theme.colors.primary,
                  }}
                />
                <div>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: 4,
                  }}>
                    I authorize the transfer of vehicle ownership
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.5,
                  }}>
                    I confirm that I am the legal owner of this vehicle and authorize Scrap2Go to take possession of the vehicle for scrapping purposes.
                  </p>
                </div>
              </label>

              {/* Disposal Authorization */}
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.spacing.sm,
                cursor: 'pointer',
              }}>
                <input
                  type="checkbox"
                  checked={agreedToDisposal}
                  onChange={(e) => setAgreedToDisposal(e.target.checked)}
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 2,
                    cursor: 'pointer',
                    accentColor: theme.colors.primary,
                  }}
                />
                <div>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: 4,
                  }}>
                    I consent to vehicle disposal and scrapping
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.5,
                  }}>
                    I understand that the vehicle will be permanently disposed of and cannot be recovered after the scrapping process begins.
                  </p>
                </div>
              </label>

              {/* JPJ Deregistration */}
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.spacing.sm,
                cursor: 'pointer',
              }}>
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 2,
                    cursor: 'pointer',
                    accentColor: theme.colors.primary,
                  }}
                />
                <div>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: 4,
                  }}>
                    I authorize JPJ deregistration on my behalf
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.5,
                  }}>
                    I authorize Scrap2Go to process the deregistration of my vehicle with JPJ (Road Transport Department) and receive the official deregistration certificate.
                  </p>
                </div>
              </label>
            </div>
          </Card>
        </div>

        {/* Digital Signature */}
        <div style={{ padding: theme.spacing.lg, paddingTop: 0 }}>
          <SectionTitle 
            title="Digital Signature" 
            subtitle="Sign below to authorize the transfer"
          />

          <Card>
            {/* Signature Pad */}
            <div style={{
              position: 'relative',
              marginBottom: theme.spacing.md,
            }}>
              <canvas
                ref={canvasRef}
                width={350}
                height={180}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                style={{
                  width: '100%',
                  height: 180,
                  border: `2px dashed ${theme.colors.borderLight}`,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: withOpacity(theme.colors.gray100, 0.3),
                  cursor: 'crosshair',
                  touchAction: 'none',
                }}
              />
              
              {!hasSignature && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  gap: theme.spacing.xs,
                }}>
                  <Icon name="draw" size={32} color={theme.colors.gray400} />
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.textSecondary,
                  }}>
                    Sign here with your finger or mouse
                  </p>
                </div>
              )}
            </div>

            {/* Clear Button */}
            {hasSignature && (
              <Button
                variant="outline"
                size="sm"
                icon="refresh"
                onClick={clearSignature}
                fullWidth
              >
                Clear Signature
              </Button>
            )}

            {/* Signature Info */}
            <div style={{
              marginTop: theme.spacing.md,
              padding: theme.spacing.sm,
              backgroundColor: withOpacity(theme.colors.primary, 0.05),
              borderRadius: theme.borderRadius.md,
              border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
            }}>
              <div style={{ display: 'flex', gap: theme.spacing.xs, alignItems: 'flex-start' }}>
                <Icon name="verified" size={16} color={theme.colors.primary} />
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Your signature will be securely stored and used only for this vehicle transfer authorization. This digital signature has the same legal validity as a handwritten signature.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Date & Time */}
        <div style={{ padding: `0 ${theme.spacing.lg}`, marginBottom: theme.spacing.lg }}>
          <Card>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginBottom: 4,
                }}>
                  Signed On
                </p>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                }}>
                  {new Date().toLocaleDateString('en-MY', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <Icon name="schedule" size={24} color={theme.colors.primary} />
            </div>
          </Card>
        </div>
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!canSubmit}
          onClick={handleSubmit}
          style={{
            opacity: canSubmit ? 1 : 0.5,
            backgroundColor: canSubmit ? theme.colors.primary : theme.colors.gray300,
            boxShadow: canSubmit ? theme.shadows.primary : 'none',
          }}
        >
          Authorize Transfer
        </Button>
        {!canSubmit && (
          <p style={{
            marginTop: theme.spacing.sm,
            fontSize: theme.fontSizes.xs,
            color: theme.colors.error,
            textAlign: 'center',
          }}>
            {!hasSignature && 'Please sign above. '}
            {(!agreedToTerms || !agreedToTransfer || !agreedToDisposal) && 'Check all consent boxes to continue.'}
          </p>
        )}
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default OwnershipTransferScreen;
