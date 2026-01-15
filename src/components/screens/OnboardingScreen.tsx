'use client'

// Onboarding Screens
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageIndicator, PageContainer, ContentArea } from '@/components/ui';

const onboardingData = [
  {
    icon: 'directions_car',
    iconColor: theme.colors.primary,
    badge: { icon: 'currency_exchange', color: theme.colors.alertOrange },
    title: 'Instant Value for\nYour Old Car',
    description: 'Our smart AI scans your car\'s condition and gives you a fair price in seconds. No haggling required.',
  },
  {
    icon: 'local_shipping',
    iconColor: theme.colors.alertOrange,
    badge: { icon: 'schedule', color: theme.colors.primary },
    title: 'Free Towing\nTo Your Doorstep',
    description: 'Schedule a pickup at your convenience. Our trucks will collect your car for free, anywhere in Malaysia.',
  },
  {
    icon: 'verified',
    iconColor: theme.colors.success,
    badge: { icon: 'shield', color: theme.colors.primary },
    title: 'Official JPJ\nDeregistration',
    description: 'We handle all the paperwork with JPJ. Get your official deregistration certificate hassle-free.',
  },
  {
    icon: 'payments',
    iconColor: theme.colors.primary,
    badge: { icon: 'bolt', color: theme.colors.alertOrange },
    title: 'Get Paid\nInstantly',
    description: 'Receive payment directly to your bank account. No delays, no hidden fees, just cash in hand.',
  },
];

const OnboardingScreen: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      router.push('/home');
    }
  };

  const handleSkip = () => {
    router.push('/home');
  };

  const data = onboardingData[currentPage];

  return (
    <PageContainer>
      {/* Skip Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing.md,
      }}>
        <button
          onClick={handleSkip}
          style={{
            padding: '8px 16px',
            borderRadius: theme.borderRadius.full,
            color: theme.colors.textSecondary,
            fontWeight: theme.fontWeights.bold,
          }}
        >
          Skip
        </button>
      </div>

      {/* Main Content */}
      <ContentArea style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.lg,
      }}>
        {/* Illustration */}
        <div style={{
          position: 'relative',
          width: 200,
          height: 200,
          borderRadius: theme.borderRadius.full,
          backgroundColor: withOpacity(data.iconColor, 0.1),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: theme.spacing.xl,
        }}>
          <Icon name={data.icon} size={96} color={data.iconColor} />
          
          {/* Floating Badge */}
          <div style={{
            position: 'absolute',
            top: 40,
            right: -8,
            backgroundColor: theme.colors.surfaceLight,
            padding: theme.spacing.sm,
            borderRadius: theme.borderRadius.xl,
            boxShadow: theme.shadows.xl,
            border: `1px solid ${theme.colors.borderLight}`,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            animation: 'bounce 3s ease-in-out infinite',
          }}>
            <Icon name={data.badge.icon} size={28} color={data.badge.color} />
          </div>
          
          {/* Pulse Ring */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: theme.borderRadius.full,
            border: `4px solid ${withOpacity(data.iconColor, 0.3)}`,
            animation: 'pulse 2s ease-in-out infinite',
          }} />
        </div>

        {/* Text */}
        <h1 style={{
          fontSize: 28,
          fontWeight: theme.fontWeights.bold,
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: theme.spacing.md,
          whiteSpace: 'pre-line',
        }}>
          {data.title}
        </h1>
        
        <p style={{
          fontSize: theme.fontSizes.base,
          color: theme.colors.textSecondary,
          textAlign: 'center',
          maxWidth: 300,
          lineHeight: 1.5,
        }}>
          {data.description}
        </p>
      </ContentArea>

      {/* Bottom Section */}
      <div style={{
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing.lg,
      }}>
        {/* Page Indicators */}
        <PageIndicator total={onboardingData.length} current={currentPage} />

        {/* Next Button */}
        <Button
          fullWidth
          size="lg"
          onClick={handleNext}
          style={{
            height: 52,
            borderRadius: theme.borderRadius.xl,
            fontSize: theme.fontSizes.base,
          }}
        >
          {currentPage === onboardingData.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </div>
    </PageContainer>
  );
};

export default OnboardingScreen;



