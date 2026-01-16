'use client'

// Photo Guidance Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { IMAGES } from '@/constants/images';
import { Icon, Button, PageContainer, PageHeader, ContentArea } from '@/components/ui';

const photoSteps = [
  {
    id: 1,
    angle: 'Front',
    icon: 'directions_car',
    description: 'Capture the full front view including license plate.',
    tips: ['Include full bumper', 'License plate visible', 'Good lighting'],
    image: '/photoguide-frontcar.png',
  },
  {
    id: 2,
    angle: 'Side',
    icon: 'panorama_horizontal',
    description: 'Capture the entire length of the vehicle from the side.',
    tips: ['Full car length', 'Show door scratches', 'Include wheels'],
    image: '/photoguide-sidecar.png',
  },
  {
    id: 3,
    angle: 'Rear',
    icon: 'directions_car',
    description: 'Capture the full rear view including license plate.',
    tips: ['Include bumper', 'License plate visible', 'Trunk closed'],
    image: '/photoguide-rearcar.png', 
  },
  {
    id: 4,
    angle: 'Engine',
    icon: 'engineering',
    description: 'Open hood and capture the entire engine bay.',
    tips: ['Hood fully open', 'Engine visible', 'Check fluid containers'],
    image: '/photoguide-engine.png'
  },
  {
    id: 5,
    angle: 'Interior',
    icon: 'airline_seat_recline_normal',
    description: 'Capture dashboard, steering wheel and front seats.',
    tips: ['Dashboard clear', 'Steering wheel', 'Seat condition'],
    image: '/photoguide-interior.png',
  },
];

const PhotoGuidanceScreen: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const step = photoSteps[currentStep];

  return (
    <PageContainer>
      <PageHeader
        title="Photo Guide"
        showBack
        onBack={() => router.back()}
      />

      {/* Progress */}
      <div style={{
        display: 'flex',
        gap: theme.spacing.xs,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surfaceLight,
        borderBottom: `1px solid ${theme.colors.borderLight}`,
      }}>
        {photoSteps.map((_, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: 4,
              borderRadius: theme.borderRadius.full,
              backgroundColor: index <= currentStep 
                ? theme.colors.primary 
                : theme.colors.gray200,
              transition: theme.transitions.normal,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <ContentArea style={{
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing.md,
      }}>
        {/* Step Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.sm,
          marginBottom: theme.spacing.lg,
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon name={step.icon} size={24} color="#fff" />
          </div>
          <div>
            <p style={{
              fontSize: theme.fontSizes.xs,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Step {currentStep + 1} of {photoSteps.length}
            </p>
            <h2 style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
            }}>
              {step.angle}
            </h2>
          </div>
        </div>

        {/* Example Image */}
        <div style={{
          position: 'relative',
          aspectRatio: '16/10',
          borderRadius: theme.borderRadius.xl,
          overflow: 'hidden',
          marginBottom: theme.spacing.lg,
          boxShadow: theme.shadows.lg,
        }}>
          <img
            src={step.image}
            alt={step.angle}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center bottom',
            }}
          />
          {/* Overlay Frame */}
          <div style={{
            position: 'absolute',
            inset: 16,
            border: `2px dashed ${withOpacity('#fff', 0.6)}`,
            borderRadius: theme.borderRadius.lg,
          }} />
          {/* Badge */}
          <div style={{
            position: 'absolute',
            top: 12,
            right: 12,
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            borderRadius: theme.borderRadius.md,
            backgroundColor: withOpacity('#000', 0.6),
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            <Icon name="photo_camera" size={14} color="#fff" />
            <span style={{
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: '#fff',
            }}>
              Example
            </span>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: theme.fontSizes.base,
          color: theme.colors.textSecondary,
          lineHeight: 1.6,
          marginBottom: theme.spacing.lg,
        }}>
          {step.description}
        </p>

        {/* Tips */}
        <div style={{
          backgroundColor: withOpacity(theme.colors.primary, 0.05),
          borderRadius: theme.borderRadius.xl,
          padding: theme.spacing.lg,
          border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
        }}>
          <h3 style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.primary,
            marginBottom: theme.spacing.md,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.xs,
          }}>
            <Icon name="lightbulb" size={18} />
            Tips for best results
          </h3>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.sm,
          }}>
            {step.tips.map((tip, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: theme.spacing.sm,
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textPrimary,
                }}
              >
                <Icon name="check" size={16} color={theme.colors.primary} />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </ContentArea>

      {/* Bottom Actions */}
      <div style={{
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        backgroundColor: theme.colors.surfaceLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.02)',
      }}>
        <div style={{
          display: 'flex',
          gap: theme.spacing.sm,
        }}>
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
            >
              Previous
            </Button>
          )}
          <Button
            fullWidth
            icon={currentStep < photoSteps.length - 1 ? 'arrow_forward' : 'photo_camera'}
            onClick={() => {
              if (currentStep < photoSteps.length - 1) {
                setCurrentStep(prev => prev + 1);
              } else {
                router.push('/gallery-permission');
              }
            }}
          >
            {currentStep < photoSteps.length - 1 ? 'Next Step' : 'Start Camera'}
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default PhotoGuidanceScreen;



