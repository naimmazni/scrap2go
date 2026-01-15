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
  const containerRef = useRef<HTMLDivElement>(null);

  // State
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  
  // Consent State
  const [agreedToTransfer, setAgreedToTransfer] = useState(false);
  const [agreedToDisposal, setAgreedToDisposal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Canvas Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (canvas && container) {
      // Set canvas resolution to match display size for sharpness
      canvas.width = container.clientWidth;
      canvas.height = 224; // Fixed height

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = theme.colors.textPrimary;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, []);

  // --- Drawing Logic ---

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).nativeEvent.offsetX;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).nativeEvent.offsetY;
    return { x, y };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Prevent scrolling when touching canvas
    if ('touches' in e) e.stopPropagation(); 

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if ('touches' in e) e.preventDefault(); // Prevent scrolling while drawing

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
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

  // --- Submission Logic ---

  const canSubmit = hasSignature && agreedToTransfer && agreedToDisposal && agreedToTerms;

  const handleSubmit = () => {
    if (canSubmit) {
      // In real app: save signature blob and transfer data
      console.log('Ownership transfer authorized');
      router.push('/jpj-deregistration-success');
    }
  };

  return (
    <ScreenContainer>
      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        backgroundColor: withOpacity(theme.colors.backgroundLight, 0.95),
        borderBottom: `1px solid ${withOpacity(theme.colors.borderLight, 1)}`
      }}>
        <button
          onClick={() => router.back()}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: theme.colors.primary,
            border: 'none',
            background: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
        >
          <Icon name="arrow_back_ios" size={20} />
        </button>
        <h1 style={{
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeights.bold,
          color: theme.colors.textPrimary,
          textAlign: 'center',
          flex: 1,
        }}>
          Final Handover Signature
        </h1>
        <div style={{ width: 36, textAlign: 'right', color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
          2/6
        </div>
      </div>

      <ScrollableContent bottomPadding={140}>
        <div style={{ padding: theme.spacing.lg, paddingTop: theme.spacing.sm, display: 'flex', flexDirection: 'column', gap: theme.spacing.lg }}>
          
          {/* Vehicle Info Card */}
          <Card style={{ padding: theme.spacing.md, borderRadius: theme.borderRadius.xl }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
               <div style={{
                 height: 56,
                 width: 56,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 borderRadius: theme.borderRadius.lg,
                 backgroundColor: withOpacity(theme.colors.primary, 0.08),
                 color: theme.colors.primary,
               }}>
                 <Icon name="directions_car" size={28} />
               </div>
               <div style={{ flex: 1 }}>
                 <h2 style={{
                   fontSize: theme.fontSizes.lg,
                   fontWeight: theme.fontWeights.bold,
                   color: theme.colors.textPrimary,
                   lineHeight: 1.1,
                   margin: 0,
                 }}>
                   Proton Wira - WAB 1234
                 </h2>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                   <span style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>Agreed Payout</span>
                   <span style={{ fontSize: theme.fontSizes.lg, fontWeight: theme.fontWeights.extrabold, color: theme.colors.primary }}>RM 1,200</span>
                 </div>
               </div>
            </div>
          </Card>

          {/* Payment Reserved Status Card */}
          <div style={{
            backgroundColor: theme.colors.successLight || '#F0FDF4',
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.md,
            display: 'flex',
            gap: theme.spacing.md,
            alignItems: 'flex-start',
            border: `1px solid ${theme.colors.successGreen || theme.colors.successLight || '#BBF7D0'}`,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.white, 0.12),
              color: theme.colors.successGreen || theme.colors.success,
            }}>
              <Icon name="lock" size={18} />
            </div>
            <div>
              <p style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold, color: theme.colors.successGreen || theme.colors.success }}>Payment Reserved</p>
              <p style={{ fontSize: theme.fontSizes.xs, color: withOpacity(theme.colors.successGreen || theme.colors.success, 0.9) }}>Funds are secured and ready for instant release upon signature completion.</p>
            </div>
          </div>

            {/* Legal Declaration Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.xs }}>
              <SectionTitle title="Legal Declaration" />
              <div style={{
                height: 128,
                overflowY: 'auto',
                backgroundColor: theme.colors.surfaceLight,
                padding: theme.spacing.md,
                borderRadius: theme.borderRadius.xl,
                border: `1px solid ${theme.colors.borderLight}`,
                fontSize: theme.fontSizes.sm,
                lineHeight: 1.6,
                color: theme.colors.textSecondary,
              }}>
              <p style={{ marginBottom: theme.spacing.sm }}>
                I hereby give full consent to Scrap2Go to sell and scrap this vehicle. I transfer full ownership and liability of the vehicle mentioned above to the appointed representative upon completion of this handover.
              </p>
              <p style={{ marginBottom: theme.spacing.sm }}>
                I confirm that all personal belongings have been removed. I acknowledge receipt of the final valuation price.
              </p>
              <p>
                This digital signature serves as a legally binding agreement for the deregistration and disposal of the asset.
              </p>
            </div>
          </div>

          {/* Authorization Checkboxes */}
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
              
              {/* Transfer Ownership */}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: theme.spacing.sm, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreedToTransfer}
                  onChange={(e) => setAgreedToTransfer(e.target.checked)}
                  style={{ width: 20, height: 20, marginTop: 2, accentColor: theme.colors.primary }}
                />
                <div>
                  <p style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold, color: theme.colors.textPrimary }}>
                    Transfer Ownership
                  </p>
                  <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary, lineHeight: 1.4 }}>
                    I confirm I am the legal owner and authorize the transfer.
                  </p>
                </div>
              </label>

              {/* Disposal Authorization */}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: theme.spacing.sm, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreedToDisposal}
                  onChange={(e) => setAgreedToDisposal(e.target.checked)}
                  style={{ width: 20, height: 20, marginTop: 2, accentColor: theme.colors.primary }}
                />
                <div>
                  <p style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold, color: theme.colors.textPrimary }}>
                    Authorize Disposal
                  </p>
                  <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary, lineHeight: 1.4 }}>
                    I understand the vehicle will be permanently scrapped.
                  </p>
                </div>
              </label>

              {/* JPJ Deregistration */}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: theme.spacing.sm, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  style={{ width: 20, height: 20, marginTop: 2, accentColor: theme.colors.primary }}
                />
                <div>
                  <p style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold, color: theme.colors.textPrimary }}>
                    JPJ Deregistration
                  </p>
                  <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary, lineHeight: 1.4 }}>
                    I authorize Scrap2Go to process deregistration with JPJ.
                  </p>
                </div>
              </label>
            </div>
          </Card>

          {/* Signature Area */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: theme.spacing.xs }}>
              <SectionTitle title="Owner Signature" />
              {hasSignature && (
                 <button 
                 onClick={clearSignature}
                 style={{
                   fontSize: theme.fontSizes.xs,
                   fontWeight: theme.fontWeights.bold,
                   color: theme.colors.alertOrange,
                   textTransform: 'uppercase',
                   background: 'none',
                   border: 'none',
                   cursor: 'pointer',
                 }}>
                 CLEAR
               </button>
              )}
            </div>

            <div 
              ref={containerRef}
              style={{
                position: 'relative',
                width: '100%',
                height: 192,
                backgroundColor: theme.colors.surfaceLight,
                borderRadius: theme.borderRadius.xl,
                border: `2px dashed ${hasSignature ? theme.colors.primary : theme.colors.gray300}`,
                overflow: 'hidden',
                touchAction: 'none',
              }}
            >
               {!hasSignature && !isDrawing && (
                 <div style={{
                   position: 'absolute',
                   inset: 0,
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   justifyContent: 'center',
                   pointerEvents: 'none',
                   color: theme.colors.gray300
                 }}>
                   <Icon name="edit" size={48} />
                   <div style={{ width: '60%', height: 1, backgroundImage: `linear-gradient(to right, ${theme.colors.gray300} 33%, rgba(255,255,255,0) 0%)`, backgroundSize: '12px 1px', backgroundRepeat: 'repeat-x', marginTop: theme.spacing.sm }} />
                   <span style={{
                     marginTop: theme.spacing.sm,
                     color: theme.colors.textSecondary,
                     fontSize: theme.fontSizes.xs,
                     fontWeight: theme.fontWeights.semibold,
                     textTransform: 'uppercase',
                     letterSpacing: 1,
                   }}>
                     Sign Here
                   </span>
                 </div>
               )}
               
               <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    cursor: 'crosshair',
                  }}
               />
            </div>

            <p style={{
              marginTop: theme.spacing.sm,
              fontSize: theme.fontSizes.xs,
              color: theme.colors.textSecondary,
              textAlign: 'center'
            }}>
              Signed on {new Date().toLocaleDateString()}
            </p>
          </div>

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
            height: 56,
            opacity: canSubmit ? 1 : 0.6,
            backgroundColor: canSubmit ? theme.colors.primary : theme.colors.gray400,
            boxShadow: canSubmit ? theme.shadows.primary : 'none',
            borderRadius: theme.borderRadius.xl,
          }}
        >
          Sign & Secure Payment
        </Button>
        {!canSubmit && (
          <p style={{
            marginTop: theme.spacing.sm,
            fontSize: theme.fontSizes.xs,
            color: theme.colors.error || '#ef4444',
            textAlign: 'center',
          }}>
            {!hasSignature ? 'Please provide your signature.' : 'Please check all boxes to proceed.'}
          </p>
        )}
        <p style={{
          marginTop: theme.spacing.sm,
          fontSize: theme.fontSizes.xs,
          color: theme.colors.textSecondary,
          textAlign: 'center',
          lineHeight: 1.4,
        }}>
          By signing, you confirm the physical handover of the vehicle and authorize payment release.
        </p>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default OwnershipTransferScreen;