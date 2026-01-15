'use client'

// Success / Certificate Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Card } from '@/components/ui';

const SuccessScreen: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: theme.colors.backgroundLight,
      paddingTop: 54,
    }}>
      {/* Close Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing.md,
      }}>
        <button
          onClick={() => router.push('/home')}
          style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.full,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.textSecondary,
          }}
        >
          <Icon name="close" size={24} />
        </button>
      </div>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing.md,
        paddingTop: theme.spacing.sm,
        overflowY: 'auto',
      }}>
        <h1 style={{
          fontSize: theme.fontSizes['2xl'],
          fontWeight: theme.fontWeights.bold,
          textAlign: 'center',
          marginBottom: theme.spacing.lg,
          lineHeight: 1.2,
        }}>
          Your Certificate<br />is Ready
        </h1>

        {/* Certificate Preview */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: theme.spacing.sm,
          marginBottom: theme.spacing.lg,
        }}>
          <div style={{ position: 'relative' }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              inset: -12,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              borderRadius: theme.borderRadius['2xl'],
              filter: 'blur(20px)',
            }} />
            
            {/* Document */}
            <div style={{
              position: 'relative',
              width: 100,
              height: 130,
              backgroundColor: theme.colors.surfaceLight,
              borderRadius: theme.borderRadius.xl,
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              border: `1px solid ${theme.colors.borderLight}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Folded Corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 24,
                height: 24,
                backgroundColor: theme.colors.gray100,
                borderBottomLeftRadius: theme.borderRadius.lg,
              }} />
              <Icon name="picture_as_pdf" size={56} color={theme.colors.error} filled />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.bold,
              fontFamily: 'monospace',
              marginBottom: 2,
            }}>
              SBHM_WXX1234.pdf
            </h2>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              1.2 MB
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.sm,
        }}>
          <Card
            padding="sm"
            onClick={() => router.push('/document-preview')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
              cursor: 'pointer',
              padding: theme.spacing.md,
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="visibility" size={20} color={theme.colors.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: theme.fontWeights.bold, fontSize: theme.fontSizes.base }}>
                Open File
              </h3>
              <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>
                Preview document now
              </p>
            </div>
            <Icon name="chevron_right" size={20} color={theme.colors.gray300} />
          </Card>

          <Card
            padding="sm"
            onClick={() => {}}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
              cursor: 'pointer',
              padding: theme.spacing.md,
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="download" size={20} color={theme.colors.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: theme.fontWeights.bold, fontSize: theme.fontSizes.base }}>
                Save to Device
              </h3>
              <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>
                Download to local storage
              </p>
            </div>
            <Icon name="chevron_right" size={20} color={theme.colors.gray300} />
          </Card>

          <Card
            padding="sm"
            onClick={() => {}}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
              cursor: 'pointer',
              padding: theme.spacing.md,
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="share" size={20} color={theme.colors.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: theme.fontWeights.bold, fontSize: theme.fontSizes.base }}>
                Share
              </h3>
              <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>
                Send via WhatsApp or Email
              </p>
            </div>
            <Icon name="chevron_right" size={20} color={theme.colors.gray300} />
          </Card>
        </div>
      </main>

      {/* Bottom Button */}
      <div style={{
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        backgroundColor: theme.colors.surfaceLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
      }}>
        <Button
          fullWidth
          size="lg"
          onClick={() => router.push('/rating')}
        >
          Rate Your Experience
        </Button>
      </div>
    </div>
  );
};

export default SuccessScreen;



