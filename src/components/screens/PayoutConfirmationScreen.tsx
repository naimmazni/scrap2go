'use client';

// Payout Confirmation / All Done Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer } from '@/components/ui';

const PayoutConfirmationScreen: React.FC = () => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);

  // Mock handlers
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Payment Receipt',
          text: 'Receipt for vehicle scrappage payment.',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported');
      // Fallback logic here
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate API call for PDF generation
    setTimeout(() => {
      setIsDownloading(false);
      console.log('Download certificate triggered');
    }, 1500);
  };

  return (
    <PageContainer>
      {/* Background: Subtle Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, ${withOpacity(theme.colors.success, 0.05)} 0%, transparent 40%),
          radial-gradient(circle, ${theme.colors.primary} 1.5px, transparent 1.5px), 
          radial-gradient(circle, ${theme.colors.success} 1.5px, transparent 1.5px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: '0 0, 0 0, 20px 20px',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* --- Header --- */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${theme.colors.gray100}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        {/* Placeholder for balance/alignment */}
        <div style={{ width: 40 }} />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="check_circle" size={24} filled color={theme.colors.success} />
          <h2 style={{
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
          }}>
            All Done!
          </h2>
        </div>

        <button 
          onClick={() => router.push('/home')}
          aria-label="Close"
          style={{ 
            width: 40,
            height: 40,
            padding: 0, 
            border: 'none', 
            background: 'none',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end',
            cursor: 'pointer'
          }}
        >
          <Icon name="close" size={24} color={theme.colors.textSecondary} />
        </button>
      </header>

      {/* --- Main Content --- */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        paddingBottom: 40,
        overflowY: 'auto',
      }}>
        
        {/* Hero Headline */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          padding: '32px 24px 24px', 
          textAlign: 'center' 
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: theme.colors.textPrimary,
            marginBottom: 8,
          }}>
            Payment Released
          </h1>
          <p style={{
            fontSize: theme.fontSizes.md,
            color: theme.colors.textSecondary,
            maxWidth: '280px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}>
            Your scrap car transaction has been successfully processed.
          </p>
        </div>

        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', zIndex: 10 }}>
          
          {/* Card 1: Bank Transfer Receipt */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: theme.borderRadius['2xl'],
            boxShadow: theme.shadows.md,
            border: `1px solid ${theme.colors.gray100}`,
            overflow: 'hidden',
          }}>
            {/* Visual Header */}
            <div style={{
              width: '100%',
              height: 100,
              background: `linear-gradient(135deg, ${withOpacity(theme.colors.primary, 0.08)} 0%, ${withOpacity(theme.colors.success, 0.05)} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme.shadows.sm,
              }}>
                 <Icon name="account_balance_wallet" size={32} color={theme.colors.primary} />
              </div>
            </div>

            {/* Receipt Details */}
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: theme.colors.textSecondary, letterSpacing: '0.05em' }}>
                  Total Amount
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', backgroundColor: withOpacity(theme.colors.success, 0.1), borderRadius: 100 }}>
                  <Icon name="verified" size={14} filled color={theme.colors.success} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: theme.colors.success, textTransform: 'uppercase' }}>Paid</span>
                </div>
              </div>

              <div style={{ fontSize: 36, fontWeight: 800, color: theme.colors.textPrimary, letterSpacing: '-0.02em' }}>
                RM 1,200.00
              </div>

              <div style={{ marginTop: 12, padding: 16, backgroundColor: theme.colors.backgroundLight, borderRadius: theme.borderRadius.lg, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>To</span>
                   <span style={{ fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.textPrimary }}>Maybank •••• 8829</span>
                </div>
                <div style={{ width: '100%', height: 1, backgroundColor: theme.colors.gray200 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>Ref ID</span>
                   <span style={{ fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.textPrimary }}>#TRX-8829-X2</span>
                </div>
              </div>
              
              <button
                onClick={handleShare}
                style={{
                  marginTop: 8,
                  width: '100%',
                  height: 44,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${theme.colors.gray200}`,
                  backgroundColor: '#fff',
                  color: theme.colors.textPrimary,
                  fontSize: theme.fontSizes.sm,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
              >
                <Icon name="share" size={18} />
                Share Receipt
              </button>
            </div>
          </div>

          {/* Card 2: Legal Completion */}
          <div style={{
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: theme.borderRadius['2xl'],
            boxShadow: theme.shadows.sm,
            border: `1px solid ${theme.colors.gray100}`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: theme.borderRadius.xl,
              backgroundColor: withOpacity(theme.colors.secondary || '#6366f1', 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name="description" size={24} color={theme.colors.secondary || '#6366f1'} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: theme.fontSizes.md, fontWeight: 700, color: theme.colors.textPrimary, marginBottom: 2 }}>
                Official Certificate
              </h3>
              <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary, lineHeight: 1.4 }}>
                JPJ Deregistration Proof
              </p>
            </div>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              style={{
                padding: '8px 12px',
                borderRadius: theme.borderRadius.lg,
                backgroundColor: isDownloading ? theme.colors.gray100 : '#f0f2f5',
                color: isDownloading ? theme.colors.textSecondary : theme.colors.textPrimary,
                fontSize: theme.fontSizes.xs,
                fontWeight: 700,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                cursor: isDownloading ? 'default' : 'pointer',
              }}
            >
              {isDownloading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <Icon name="download" size={16} />
                  <span>PDF</span>
                </>
              )}
            </button>
          </div>

        </div>
      </main>

      {/* --- Footer / Bottom Actions --- */}
      <div style={{
        padding: 24,
        paddingBottom: 32,
        backgroundColor: '#fff',
        borderTop: `1px solid ${theme.colors.gray100}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.03)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <p style={{ fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.textPrimary }}>
             Thank you for recycling responsibly!
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button
            fullWidth
            size="lg"
            onClick={() => router.push('/home')}
            style={{
              height: 52,
              borderRadius: theme.borderRadius.xl,
              fontSize: theme.fontSizes.md,
              fontWeight: 700,
              boxShadow: theme.shadows.primary,
            }}
          >
            Back to Home
          </Button>
          
          <button
            style={{
              width: '100%',
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.colors.textSecondary,
              fontWeight: 600,
              fontSize: theme.fontSizes.sm,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = theme.colors.primary}
            onMouseOut={(e) => e.currentTarget.style.color = theme.colors.textSecondary}
          >
            View Transaction History
          </button>
        </div>

        {/* Secure Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, opacity: 0.5 }}>
          <Icon name="lock" size={12} />
          <span style={{ fontSize: 10, textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
            Processed via FPX Secure Gateway
          </span>
        </div>
      </div>
    </PageContainer>
  );
};

export default PayoutConfirmationScreen;