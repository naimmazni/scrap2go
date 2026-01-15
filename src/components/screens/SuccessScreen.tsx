'use client'

// Success / Post-Handover Confirmation Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Card, ScreenContainer } from '@/components/ui';

const SuccessScreen: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100dvh',
      width: '100%',
      justifyContent: 'space-between',
      overflowX: 'hidden',
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ position: 'relative', marginBottom: theme.spacing.lg }}>
           <div style={{
             height: 96,
             width: 96,
             borderRadius: theme.borderRadius.full,
             backgroundColor: withOpacity(theme.colors.success, 0.1),
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             boxShadow: `0 0 0 8px ${withOpacity(theme.colors.success, 0.05)}`,
           }}>
             <Icon name="check_circle" size={48} color={theme.colors.success} filled />
           </div>
           <div style={{
             position: 'absolute',
             bottom: -8,
             right: -8,
             height: 40,
             width: 40,
             borderRadius: theme.borderRadius.full,
             backgroundColor: theme.colors.surfaceLight,
             boxShadow: theme.shadows.md,
             border: `1px solid ${theme.colors.borderLight}`,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
           }}>
             <Icon name="local_shipping" size={20} color={theme.colors.primary} />
           </div>
        </div>
        <h1 style={{
          fontSize: '1.875rem', // 30px
          fontWeight: theme.fontWeights.extrabold,
          letterSpacing: '-0.025em',
          margin: 0,
          color: theme.colors.textPrimary,
        }}>
          Handover Complete!
        </h1>
        <p style={{
          marginTop: '0.5rem',
          fontSize: theme.fontSizes.base,
          color: theme.colors.textSecondary,
          maxWidth: 280,
        }}>
          Your vehicle is on its way to the facility.
        </p>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: 448, // max-w-md
        margin: '0 auto',
        padding: `0 ${theme.spacing.lg}`,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}>
        {/* JPJ Status Card */}
        <div style={{
          backgroundColor: theme.colors.surfaceLight,
          padding: theme.spacing.lg,
          borderRadius: theme.borderRadius['2xl'],
          boxShadow: theme.shadows.sm,
          border: `1px solid ${theme.colors.borderLight}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: theme.spacing.md,
        }}>
          <div style={{
            height: 48,
            width: 48,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.borderRadius.xl,
            backgroundColor: withOpacity(theme.colors.primary, 0.1), // blue-50 equivalent
            color: theme.colors.primary,
          }}>
            <Icon name="description" size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 4,
            }}>
              <h2 style={{ fontWeight: theme.fontWeights.bold, fontSize: theme.fontSizes.lg }}>
                JPJ e-Deregistration
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                height: 8,
                width: 8,
                borderRadius: theme.borderRadius.full,
                backgroundColor: theme.colors.primary, // blue-500
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }} />
              <p style={{
                color: theme.colors.primary,
                fontWeight: theme.fontWeights.bold,
                fontSize: theme.fontSizes.sm,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Processing...
              </p>
            </div>
            <p style={{
              marginTop: 8,
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              lineHeight: 1.6,
            }}>
              We are finalizing the legal ownership transfer with the authorities.
            </p>
          </div>
        </div>

        {/* Payment Status Card */}
        <div style={{
          backgroundColor: theme.colors.surfaceLight,
          padding: theme.spacing.lg,
          borderRadius: theme.borderRadius['2xl'],
          boxShadow: theme.shadows.sm,
          border: `1px solid ${theme.colors.borderLight}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: theme.spacing.md,
        }}>
          <div style={{
            height: 48,
            width: 48,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.borderRadius.xl,
            backgroundColor: withOpacity(theme.colors.alertOrange, 0.1), // orange-50 equivalent
            color: theme.colors.alertOrange,
          }}>
            <Icon name="account_balance_wallet" size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 4,
            }}>
              <h2 style={{ fontWeight: theme.fontWeights.bold, fontSize: theme.fontSizes.lg }}>
                Payment (RM 1,200)
              </h2>
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '2px 10px',
              borderRadius: theme.borderRadius.full,
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              backgroundColor: withOpacity(theme.colors.alertOrange, 0.1),
              color: theme.colors.alertDark, // Using existing theme color close to orange-700
            }}>
              Pending Verification
            </div>
            <div style={{
              marginTop: 12,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              padding: 12,
              backgroundColor: theme.colors.backgroundLight,
              borderRadius: theme.borderRadius.lg,
            }}>
              <Icon name="info" size={18} color={theme.colors.textMuted} />
              <p style={{
                fontSize: theme.fontSizes.xs,
                color: theme.colors.textSecondary,
                fontWeight: theme.fontWeights.medium,
                lineHeight: 1.4,
                margin: 0,
              }}>
                Transfer will be initiated within 24 hours once the vehicle reaches our yard.
              </p>
            </div>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: 13,
          color: theme.colors.textMuted,
          padding: '0 1rem',
        }}>
          You will receive a notification and SMS once the processing is complete.
        </p>

      </main>

      {/* Footer */}
      <footer style={{
        width: '100%',
        maxWidth: 448,
        margin: '0 auto',
        padding: `1.5rem ${theme.spacing.lg} 2.5rem`,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}>
        <Button
          fullWidth
          size="lg"
          onClick={() => router.push('/home')} // Returned to dashboard
          style={{
             height: 60,
             borderRadius: theme.borderRadius.xl,
             fontSize: theme.fontSizes.lg,
             fontWeight: theme.fontWeights.bold,
             boxShadow: `0 10px 15px -3px ${withOpacity(theme.colors.primary, 0.3)}`,
          }}
        >
          Return to Dashboard
        </Button>
        
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); router.push('/contact-support'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '8px 0',
            color: theme.colors.textSecondary,
            fontWeight: theme.fontWeights.semibold,
            textDecoration: 'none',
            fontSize: theme.fontSizes.base,
          }}
        >
          <Icon name="headset_mic" size={20} />
          <span>Need Help? Contact Support</span>
        </a>
      </footer>
    </div>
  );
};

