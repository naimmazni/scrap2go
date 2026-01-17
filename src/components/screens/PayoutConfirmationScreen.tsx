'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer } from '@/components/ui';

interface PayoutConfirmationScreenProps {
  amount?: number;
}

const PayoutConfirmationScreen: React.FC<PayoutConfirmationScreenProps> = ({ amount = 1200 }) => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadDocument = () => {
    setIsDownloading(true);
    // Simulate PDF download for JPJ deregistration document
    setTimeout(() => {
      setIsDownloading(false);
      console.log('JPJ Deregistration Certificate downloaded');
      // In real implementation, trigger actual PDF download
    }, 1500);
  };

  return (
    <PageContainer>
      {/* Sticky Header with Back Button */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        backgroundColor: withOpacity(theme.colors.backgroundLight, 0.8),
        backdropFilter: 'blur(10px)',
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        width: '100%',
      }}>
        <Button
          variant="ghost"
          onClick={() => router.back()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          }}
        >
          <Icon name="chevron_left" size={24} color={theme.colors.textPrimary} />
        </Button>
      </header>

      {/* Confetti Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 240,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 10,
      }}>
        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: theme.colors.primary, borderRadius: '50%', top: 40, left: '10%', opacity: 0.6 }} />
        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: theme.colors.success, borderRadius: '2px', top: 80, left: '25%', opacity: 0.6 }} />
        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: '#90CAF9', borderRadius: '50%', top: 56, left: '60%', opacity: 0.6 }} />
        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: '#FDD835', borderRadius: '2px', top: 96, left: '85%', opacity: 0.6 }} />
      </div>

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.lg}`,
        width: '100%',
        maxWidth: 448,
        margin: '0 auto',
        gap: 24,
        position: 'relative',
        zIndex: 20,
        overflowY: 'auto',
      }}>

        {/* Success Icon */}
        <div style={{
          width: 80,
          height: 80,
          borderRadius: theme.borderRadius.full,
          backgroundColor: theme.colors.success,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: `0 20px 25px -5px ${withOpacity(theme.colors.success, 0.3)}`,
          border: `8px solid ${withOpacity(theme.colors.success, 0.15)}`,
        }}>
          <Icon name="check_circle" size={48} color="#fff" filled />
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.extrabold || 800,
            color: theme.colors.textPrimary,
            margin: 0,
            marginBottom: 8,
          }}>
            Payment Released
          </h1>
          <p style={{
            fontSize: theme.fontSizes.base,
            color: theme.colors.textSecondary,
            margin: 0,
            fontWeight: theme.fontWeights.medium,
          }}>
            Transaction completed successfully
          </p>
        </div>

        {/* Amount Received */}
        <div style={{
          width: '100%',
          backgroundColor: withOpacity(theme.colors.success, 0.08),
          border: `1px solid ${withOpacity(theme.colors.success, 0.2)}`,
          borderRadius: theme.borderRadius['2xl'],
          padding: theme.spacing.lg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: theme.spacing.sm,
        }}>
          <p style={{
            fontSize: theme.fontSizes.xs,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            margin: 0,
          }}>
            You Received
          </p>
          <h3 style={{
            fontSize: theme.fontSizes['3xl'],
            fontWeight: theme.fontWeights.extrabold || 800,
            color: theme.colors.success,
            margin: 0,
          }}>
            RM {amount.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h3>
        </div>

        {/* Receipt Card */}
        <div style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: theme.borderRadius['2xl'],
          overflow: 'hidden',
          boxShadow: theme.shadows.lg,
          border: `1px solid #fff`,
        }}>
          {/* Receipt Top - Amount */}
          <div style={{
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderBottom: `2px dashed ${withOpacity(theme.colors.gray200, 0.6)}`,
            position: 'relative',
          }}>
            {/* Dashed border cutouts */}
            <div style={{
              position: 'absolute',
              left: -12,
              bottom: -12,
              width: 24,
              height: 24,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.backgroundLight,
            }} />
            <div style={{
              position: 'absolute',
              right: -12,
              bottom: -12,
              width: 24,
              height: 24,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.backgroundLight,
            }} />

            <span style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              color: theme.colors.textSecondary,
              letterSpacing: '0.08em',
              marginBottom: 8,
            }}>
              Amount Paid
            </span>

            <span style={{
              fontSize: 48,
              fontWeight: 900,
              color: theme.colors.success,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              wordWrap: 'break-word',
              overflow: 'visible',
            }}>
              RM {amount.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>

            {/* Bank Details */}
            <div style={{
              marginTop: 24,
              padding: 12,
              backgroundColor: withOpacity(theme.colors.gray200, 0.3),
              borderRadius: theme.borderRadius['2xl'],
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: theme.fontSizes.base, fontWeight: 700, color: theme.colors.textPrimary }}>
                <Icon name="account_balance" size={18} />
                <span>Maybank</span>
              </div>
              <span style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>
                Account ending in •••• 1234
              </span>
            </div>
          </div>

          {/* Receipt Details */}
          <div style={{
            padding: 24,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: theme.fontSizes.sm }}>
              <span style={{ color: theme.colors.textSecondary }}>Transaction Date</span>
              <span style={{ fontWeight: 700, color: theme.colors.textPrimary }}>24 May 2024, 14:35</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: theme.fontSizes.sm }}>
              <span style={{ color: theme.colors.textSecondary }}>Reference ID</span>
              <span style={{ fontWeight: 700, color: theme.colors.textPrimary }}>S2G-8829-XJ9</span>
            </div>
          </div>
        </div>

        {/* Document Cards Section */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Ownership Transfer Certification */}
          <div 
            onClick={() => router.push('/legal-completion-preview')}
            style={{
              width: '100%',
              padding: 16,
              backgroundColor: '#fff',
              borderRadius: theme.borderRadius['2xl'],
              border: `1px solid ${theme.colors.gray100}`,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              boxShadow: theme.shadows.sm,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.md;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.sm;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: 48,
              height: 48,
              borderRadius: theme.borderRadius.xl,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name="description" size={24} color={theme.colors.primary} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                margin: 0,
                marginBottom: 2,
              }}>
                Legal Completion
              </h3>
              <p style={{
                fontSize: theme.fontSizes.xs,
                color: theme.colors.textSecondary,
                margin: 0,
              }}>
                Ownership Transfer Certification
              </p>
            </div>

            <button
              onClick={handleDownloadDocument}
              style={{
                padding: '8px 12px',
                borderRadius: theme.borderRadius.lg,
                backgroundColor: isDownloading ? theme.colors.gray100 : withOpacity(theme.colors.primary, 0.08),
                color: theme.colors.primary,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isDownloading ? 'default' : 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              <Icon name="download" size={18} />
            </button>
          </div>

          {/* JPJ Deregistration Documentation */}
          <div style={{
            width: '100%',
            padding: 16,
            backgroundColor: '#fff',
            borderRadius: theme.borderRadius['2xl'],
            border: `1px solid ${theme.colors.gray100}`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow: theme.shadows.sm,
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: theme.borderRadius.xl,
              backgroundColor: withOpacity(theme.colors.success, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name="description" size={24} color={theme.colors.success} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                margin: 0,
                marginBottom: 2,
              }}>
                Official Documentation
              </h3>
              <p style={{
                fontSize: theme.fontSizes.xs,
                color: theme.colors.textSecondary,
                margin: 0,
              }}>
                JPJ Deregistration Official Documentation
              </p>
            </div>

            <button
              onClick={handleDownloadDocument}
              style={{
                padding: '8px 12px',
                borderRadius: theme.borderRadius.lg,
                backgroundColor: isDownloading ? theme.colors.gray100 : withOpacity(theme.colors.success, 0.08),
                color: theme.colors.success,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isDownloading ? 'default' : 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              <Icon name="download" size={18} />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        width: '100%',
        maxWidth: 448,
        margin: '0 auto',
        padding: `16px ${theme.spacing.lg} 32px`,
      }}>
        <Button
          fullWidth
          size="lg"
          onClick={() => router.push('/home')}
          style={{
            height: 56,
            borderRadius: theme.borderRadius['2xl'],
            boxShadow: `0 10px 15px -3px ${withOpacity(theme.colors.primary, 0.3)}`,
            textTransform: 'uppercase',
            fontWeight: theme.fontWeights.bold,
            letterSpacing: '0.05em',
          }}
        >
          Back to Home
        </Button>

        <p style={{
          marginTop: 16,
          textAlign: 'center',
          fontSize: theme.fontSizes.xs,
          color: theme.colors.textSecondary,
          lineHeight: 1.6,
        }}>
          Thank you for choosing us for your vehicle disposal. Your records will be kept for 7 years.
        </p>
      </footer>
    </PageContainer>
  );
};

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Payment Receipt',
      text: 'My scrap car payment has been released!',
      url: window.location.href,
    }).catch(() => console.log('Share cancelled'));
  }
};

export default PayoutConfirmationScreen;