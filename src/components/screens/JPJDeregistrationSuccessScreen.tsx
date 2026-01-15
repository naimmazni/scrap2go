'use client'

// JPJ Deregistration Success Screen - Official certificate display
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  ScreenContainer, 
  ScrollableContent, 
  FixedBottomContainer,
  SuccessIcon,
  IconButton
} from '@/components/ui';

const JPJDeregistrationSuccessScreen: React.FC = () => {
  const router = useRouter();

  const handleDownload = () => {
    // In a real app, this would download the certificate PDF
    alert('Certificate downloaded!');
  };

  return (
    <ScreenContainer>
      {/* Header with Close Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing.md,
      }}>
        <IconButton
          icon="close"
          variant="ghost"
          onClick={() => router.push('/home')}
        />
      </div>

      {/* Main Content */}
      <ScrollableContent bottomPadding={140} style={{ alignItems: 'center' }}>
        {/* Success Icon & Message */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: theme.spacing.lg,
          marginBottom: theme.spacing.xl,
          animation: 'fadeInUp 0.6s ease-out forwards',
        }}>
          <SuccessIcon size={80} />

          {/* Success Text */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.spacing.sm,
            textAlign: 'center',
          }}>
            <h1 style={{
              fontSize: theme.fontSizes['2xl'],
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
              lineHeight: 1.2,
            }}>
              Official Deregistration Complete
            </h1>
            <p style={{
              fontSize: theme.fontSizes.base,
              color: theme.colors.textSecondary,
              maxWidth: 280,
            }}>
              Your vehicle plate <span style={{
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
              }}>WXX 1234</span> is now legally deregistered.
            </p>
          </div>
        </div>

        {/* Certificate Card */}
        <Card
          padding="none"
          style={{
            width: '100%',
            maxWidth: 380,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Blue Header Bar */}
          <div style={{
            height: 12,
            width: '100%',
            background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight})`,
          }} />

          {/* Certificate Content */}
          <div style={{
            padding: theme.spacing.lg,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.lg,
            position: 'relative',
          }}>
            {/* Watermark */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.03,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}>
              <Icon
                name="verified"
                size={200}
                style={{ transform: 'rotate(-15deg)' }}
              />
            </div>

            {/* Header Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'relative',
              zIndex: 10,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <p style={{
                  fontSize: 10,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textSecondary,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}>
                  Government of Malaysia
                </p>
                <h2 style={{
                  fontSize: theme.fontSizes.lg,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.primary,
                }}>
                  Sijil Batal Hak Milik
                </h2>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                }}>
                  Road Transport Department (JPJ)
                </p>
              </div>

              {/* JPJ Emblem */}
              <div style={{
                width: 48,
                height: 48,
                backgroundColor: withOpacity('#FFC107', 0.1),
                borderRadius: theme.borderRadius.md,
                border: `1px solid ${withOpacity('#FFC107', 0.3)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="local_police" size={32} color="#D97706" />
              </div>
            </div>

            {/* Details Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: theme.spacing.lg,
              rowGap: theme.spacing.lg,
              position: 'relative',
              zIndex: 10,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  color: theme.colors.textMuted,
                  fontWeight: theme.fontWeights.semibold,
                }}>
                  Vehicle Plate
                </span>
                <span style={{
                  fontSize: theme.fontSizes.xl,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                  fontFamily: 'monospace',
                }}>
                  WXX 1234
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  color: theme.colors.textMuted,
                  fontWeight: theme.fontWeights.semibold,
                }}>
                  Status
                </span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}>
                  <span style={{
                    width: 8,
                    height: 8,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: theme.colors.alertOrange,
                  }} />
                  <span style={{
                    fontSize: theme.fontSizes.base,
                    fontWeight: theme.fontWeights.medium,
                    color: theme.colors.textPrimary,
                  }}>
                    Scrapped
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  color: theme.colors.textMuted,
                  fontWeight: theme.fontWeights.semibold,
                }}>
                  Date
                </span>
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                }}>
                  24 Oct 2023
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  color: theme.colors.textMuted,
                  fontWeight: theme.fontWeights.semibold,
                }}>
                  Cert Ref.
                </span>
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                  fontFamily: 'monospace',
                }}>
                  JPJ-SBHM-9921
                </span>
              </div>
            </div>

            {/* QR Code Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.md,
              paddingTop: theme.spacing.md,
              marginTop: theme.spacing.sm,
              borderTop: `1px dashed ${theme.colors.borderLight}`,
              position: 'relative',
              zIndex: 10,
            }}>
              {/* QR Code */}
              <div style={{
                width: 72,
                height: 72,
                backgroundColor: theme.colors.surfaceLight,
                padding: 4,
                borderRadius: theme.borderRadius.sm,
                border: `1px solid ${theme.colors.borderLight}`,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="qr_code_2" size={64} color={theme.colors.textPrimary} />
              </div>

              {/* Verification Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <p style={{
                  fontSize: 11,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.4,
                }}>
                  This is a digitally generated document by JPJ e-Aduan System. No signature is required.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  marginTop: 4,
                }}>
                  <Icon name="verified_user" size={14} color={theme.colors.primary} />
                  <span style={{
                    fontSize: 10,
                    fontWeight: theme.fontWeights.bold,
                    color: theme.colors.primary,
                    textTransform: 'uppercase',
                  }}>
                    Valid Document
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </ScrollableContent>

      {/* Fixed Bottom Actions */}
      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          icon="local_shipping"
          fullWidth
          onClick={() => router.push('/payment-method')}
          style={{
            boxShadow: `0 8px 16px ${withOpacity(theme.colors.primary, 0.3)}`,
          }}
        >
          Set Up Payment Method
        </Button>

        <button
          onClick={() => router.push('/document-preview')}
          style={{
            width: '100%',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            color: theme.colors.primary,
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            borderRadius: theme.borderRadius.lg,
            border: 'none',
            cursor: 'pointer',
            gap: theme.spacing.xs,
          }}
        >
          <Icon name="visibility" size={18} />
          View Certificate
        </button>
      </FixedBottomContainer>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ScreenContainer>
  );
};

export default JPJDeregistrationSuccessScreen;



