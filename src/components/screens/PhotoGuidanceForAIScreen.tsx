'use client'

// Photo Guidance for AI Valuation Screen - Guide users to take proper photos
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  PageContainer,
  PageHeader,
  ContentArea,
  TipItem,
  WarningBox,
  FixedBottomContainer
} from '@/components/ui';

const PhotoGuidanceForAIScreen: React.FC = () => {
  const router = useRouter();

  const tips = [
    {
      icon: 'wb_sunny',
      title: 'Find Good Lighting',
      description: 'Avoid dark garages or harsh shadows. Natural sunlight is best.',
    },
    {
      icon: 'straighten',
      title: 'Stand 2 Meters Back',
      description: 'Ensure the whole car fits inside the frame.',
    },
    {
      icon: '360',
      title: 'Capture All Sides',
      description: "We'll guide you to take photos of the front, back, and sides.",
    },
  ];

  const handleStartScan = () => {
    router.push('/camera');
  };

  return (
    <PageContainer>
      <PageHeader
        title="Photo Guide"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea>
        <div style={{
          padding: theme.spacing.lg,
          paddingBottom: 120,
        }}>
          <div style={{
            marginBottom: theme.spacing.lg,
          }}>
            <h2 style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.xs,
            }}>
              Help us price your car
            </h2>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              lineHeight: 1.5,
            }}>
              Better photos mean a more accurate valuation. Follow these simple tips.
            </p>
          </div>

          {/* Illustration Preview */}
          <div style={{
            marginBottom: theme.spacing.xl,
            overflow: 'hidden',
            aspectRatio: '16/9',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon
              name="center_focus_strong"
              size={80}
              color={withOpacity(theme.colors.primary, 0.4)}
            />

            {/* AI Ready Badge */}
            <div style={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              backgroundColor: withOpacity('#fff', 0.9),
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: theme.borderRadius.full,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              boxShadow: theme.shadows.sm,
            }}>
              <Icon name="check_circle" size={14} color={theme.colors.primary} />
              <span style={{
                fontSize: theme.fontSizes.xs,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.primary,
              }}>
                AI Ready
              </span>
            </div>
          </div>

          {/* Tips List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            {tips.map((tip, index) => (
              <TipItem
                key={index}
                icon={tip.icon}
                title={tip.title}
                description={tip.description}
              />
            ))}

            <WarningBox
              title="Please Avoid"
              message="Blurry photos or photos where the license plate is covered."
              variant="error"
              style={{ marginTop: theme.spacing.sm }}
            />
          </div>
        </div>
      </ContentArea>

      <FixedBottomContainer blur={false}>
        <Button
          variant="primary"
          size="lg"
          iconRight="photo_camera"
          fullWidth
          onClick={handleStartScan}
          style={{ boxShadow: theme.shadows.primary }}
        >
          Got It! Start Scan
        </Button>
      </FixedBottomContainer>
    </PageContainer>
  );
};

export default PhotoGuidanceForAIScreen;



