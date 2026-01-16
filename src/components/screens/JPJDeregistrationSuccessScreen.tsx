'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer } from '@/components/ui';

const JPJDeregistrationSuccessScreen: React.FC = () => {
  const router = useRouter();

  const steps = [
    { title: 'Vehicle Inspection', status: 'completed' },
    { title: 'Legal Handover Signature', status: 'completed' },
    { title: 'Towing & Collection', status: 'completed' },
    { title: 'Official JPJ Deregistration', status: 'completed' },
  ];

  return (
    <PageContainer>
      {/* Sticky Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: withOpacity(theme.colors.backgroundLight, 0.8),
        backdropFilter: 'blur(10px)',
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        width: '100%',
      }}>
        <button
          onClick={() => router.back()}
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Icon name="chevron_left" size={24} color={theme.colors.textPrimary} />
        </button>
        <h1 style={{
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeights.bold,
          color: theme.colors.textPrimary,
          textAlign: 'center',
          flex: 1,
        }}>
          Deregistration
        </h1>
        <div style={{ width: 24 }} />
      </header>

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.lg}`,
        width: '100%',
        maxWidth: 448,
        margin: '0 auto',
        gap: theme.spacing.xl,
        overflowY: 'auto',
      }}>
        {/* Success Icon with Badge */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: theme.spacing.md,
          gap: theme.spacing.md,
        }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
          }}>
            {/* Main Icon */}
            <div style={{
              position: 'absolute',
              width: 96,
              height: 96,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.success, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="verified_user" size={64} color={theme.colors.success} filled />
            </div>

            {/* Badge - Small checkmark */}
            <div style={{
              position: 'absolute',
              bottom: -8,
              right: -8,
              width: 32,
              height: 32,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.success,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `4px solid ${theme.colors.backgroundLight}`,
            }}>
              <Icon name="check" size={16} filled />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: theme.fontSizes['2xl'],
              fontWeight: theme.fontWeights.extrabold || 800,
              color: theme.colors.textPrimary,
              margin: 0,
              marginBottom: 4,
            }}>
              100% Complete
            </h2>
            <p style={{
              fontSize: theme.fontSizes.base,
              color: theme.colors.textSecondary,
              fontWeight: theme.fontWeights.medium,
              margin: 0,
            }}>
              Vehicle successfully deregistered
            </p>
          </div>
        </div>

        {/* Timeline Card */}
        <div style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: theme.borderRadius['2xl'],
          padding: theme.spacing.xl,
          boxShadow: theme.shadows.sm,
          border: `1px solid ${withOpacity(theme.colors.gray100, 0.5)}`,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: theme.spacing.lg,
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  {/* Step Circle */}
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: theme.colors.success,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon name="check" size={14} filled />
                  </div>
                  
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div style={{
                      width: 2,
                      height: 24,
                      backgroundColor: theme.colors.success,
                      marginTop: theme.spacing.sm,
                    }} />
                  )}
                </div>

                {/* Step Title */}
                <div style={{
                  paddingTop: 2,
                  paddingBottom: index < steps.length - 1 ? theme.spacing.md : 0,
                }}>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.bold,
                    color: theme.colors.textPrimary,
                    margin: 0,
                  }}>
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div style={{
          width: '100%',
          backgroundColor: withOpacity(theme.colors.primary, 0.08),
          border: `1px solid ${withOpacity(theme.colors.primary, 0.2)}`,
          borderRadius: theme.borderRadius['2xl'],
          padding: theme.spacing.lg,
          display: 'flex',
          gap: theme.spacing.lg,
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.xl,
            backgroundColor: theme.colors.primary,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon name="description" size={20} filled />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.primary,
              margin: 0,
            }}>
              Your Digital Certificate is now ready.
            </p>
            <p style={{
              fontSize: theme.fontSizes.xs,
              color: withOpacity(theme.colors.primary, 0.7),
              margin: 0,
            }}>
              You can download it anytime from your profile.
            </p>
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <footer style={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        maxWidth: 448,
        margin: '0 auto',
        padding: `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.xl}`,
        backgroundColor: withOpacity(theme.colors.backgroundLight, 0.9),
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}>
        <Button
          fullWidth
          size="lg"
          onClick={() => router.push('/payout-confirmation')}
          style={{
            height: 64,
            borderRadius: theme.borderRadius['2xl'],
            boxShadow: `0 20px 25px -5px ${withOpacity(theme.colors.primary, 0.3)}`,
            fontSize: theme.fontSizes.base,
            fontWeight: theme.fontWeights.extrabold || 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.sm,
          }}
        >
          <Icon name="account_balance_wallet" size={20} />
          View My Payment
        </Button>
      </footer>
    </PageContainer>
  );
};

export default JPJDeregistrationSuccessScreen;
