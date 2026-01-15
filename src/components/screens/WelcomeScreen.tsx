'use client'

// Welcome / Landing Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Badge, PageContainer, ContentArea } from '@/components/ui';

const WelcomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <PageContainer style={{ overflow: 'hidden' }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing.md,
        zIndex: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.lg,
            backgroundColor: theme.colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: theme.shadows.md,
          }}>
            <Icon name="recycling" size={24} color={theme.colors.textLight} />
          </div>
          <span style={{
            fontSize: theme.fontSizes.xl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
          }}>
            Scrap2Go
          </span>
        </div>
        
        {/* Language Toggle */}
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '6px 12px',
          borderRadius: theme.borderRadius.full,
          backgroundColor: theme.colors.surfaceLight,
          boxShadow: theme.shadows.sm,
          border: `1px solid ${theme.colors.borderLight}`,
          fontSize: theme.fontSizes.sm,
          fontWeight: theme.fontWeights.semibold,
        }}>
          <span style={{ opacity: 0.4 }}>BM</span>
          <span style={{ color: theme.colors.gray300 }}>|</span>
          <span style={{ color: theme.colors.primary }}>EN</span>
        </button>
      </header>

      {/* Main Content */}
      <ContentArea style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.md,
        zIndex: 10,
      }}>
        {/* Hero Illustration */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 240,
          aspectRatio: '1',
          marginBottom: theme.spacing.lg,
        }}>
          {/* Background blob */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            borderRadius: theme.borderRadius.full,
            filter: 'blur(48px)',
            transform: 'translateY(16px)',
          }} />
          
          {/* Hero Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFYi3Qqh-3_QHJlGvKF_pUmRrx5kQd4yNUYtJduqS_xTaj_MpRZBL5xDvZj1pVn2vJWkpN_Mo8LeAEw0pWo0h_Pz9xANVFnTt23lLxCVBm6tDbP_fa61cINFY7o2fgKYq9-VjAar5r0XWF15vPemwqDAoG7jYLn9KGBdC-sG0Jn-t6Yzm31do1cywUx7ZRfgZhf0Tmp9hfPxKv-cI35t4nB-JyPQXguqJCw30MYF6_PWBZ31XQn-buTdo9hKZlk6w9DCQH-mXvkRea")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />
          
          {/* Floating Badge */}
          <div style={{
            position: 'absolute',
            top: 40,
            right: -8,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 12px',
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.surfaceLight,
            boxShadow: theme.shadows.lg,
            animation: 'bounce 3s ease-in-out infinite',
          }}>
            <Icon name="bolt" size={20} color={theme.colors.alertOrange} />
            <span style={{ 
              fontSize: theme.fontSizes.xs, 
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
            }}>
              Fast
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div style={{ textAlign: 'center', maxWidth: 300 }}>
          <h1 style={{
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.extrabold,
            lineHeight: 1.2,
            marginBottom: theme.spacing.sm,
            color: theme.colors.textPrimary,
          }}>
            Turn Your Old Car <br />
            <span style={{ color: theme.colors.primary }}>Into Cash Today</span>
          </h1>
          
          <p style={{
            fontSize: theme.fontSizes.sm,
            color: withOpacity(theme.colors.textPrimary, 0.7),
            marginBottom: theme.spacing.lg,
            lineHeight: 1.5,
          }}>
            Your hassle-free car disposal solution. Instant valuation, free towing, and safe deregistration.
          </p>

          {/* Feature Points */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.md,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.sm,
              padding: theme.spacing.sm,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: theme.colors.surfaceLight,
              border: `1px solid ${theme.colors.borderLight}`,
            }}>
              <Icon name="currency_exchange" size={20} color={theme.colors.primary} />
              <span style={{ 
                fontSize: theme.fontSizes.xs, 
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
              }}>
                Instant Quote
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.sm,
              padding: theme.spacing.sm,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: theme.colors.surfaceLight,
              border: `1px solid ${theme.colors.borderLight}`,
            }}>
              <Icon name="local_shipping" size={20} color={theme.colors.alertOrange} />
              <span style={{ 
                fontSize: theme.fontSizes.xs, 
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
              }}>
                Free Towing
              </span>
            </div>
          </div>
        </div>
      </ContentArea>

      {/* Footer */}
      <footer style={{
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        zIndex: 20,
      }}>
        <Button
          fullWidth
          size="lg"
          iconRight="arrow_forward"
          onClick={() => router.push('/login')}
          style={{
            height: 52,
            borderRadius: theme.borderRadius.xl,
            fontSize: theme.fontSizes.base,
          }}
        >
          Get Started
        </Button>
        <p style={{
          textAlign: 'center',
          fontSize: theme.fontSizes.xs,
          color: withOpacity(theme.colors.textPrimary, 0.4),
          marginTop: theme.spacing.sm,
        }}>
          No hidden fees. 100% Free Service.
        </p>
      </footer>
    </PageContainer>
  );
};

export default WelcomeScreen;



