'use client'

// Photo Guidance Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer, PageHeader, ContentArea } from '@/components/ui';

const photoSteps = [
  {
    id: 1,
    angle: 'Front View',
    icon: 'directions_car',
    description: 'Position yourself 3 meters in front of the vehicle. Capture the full front including license plate.',
    tips: ['Include full bumper', 'Ensure license plate is visible', 'Good lighting on headlights'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAesUFmzjMMr0LU5hKyzB0EcJeBpr1MyLs3iZF18wHNH1l2PzVEnS1DFSTb4wQVMExWgLf4ADzRRJFlo4SXyDu6nA_aPBvWba5L5PRlUOjUy7iJOpHlmTYFWwwzyfS8U_7GFvOQOn4SXfyzQGqdhfGXT1c_gAiu5M5AdLSkA254ZtmXEphFvOOrlxiov9HnhAsh_4KnZ0K2CiNQcLxv4WOS8A4WCvksVK3_a71mBbqjjzLbOoMsc6-VkFawn4PZ1OBhNc-xQHVABbaA',
  },
  {
    id: 2,
    angle: 'Side View',
    icon: 'panorama_horizontal',
    description: 'Stand 4 meters from the side. Capture the entire length of the vehicle.',
    tips: ['Full vehicle length', 'Show door condition', 'Include all wheels'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm0PqIn8e2JTb12p86u2EKJSG4q2SrRekuG03sOjAmHHkxePz775XYv-EMN8azcRusBTJehpjK0Qef2VkAh--CBsEAu-THyhBR34_oOJ39Z0WwflFSwVn0Xx5CxEo20ehHvGU_Y5G_yF5B8oGYpyRGiiqayaaZAkVtosNBDthZT_kNzR2mZCmbnDL-QKagxv5S8-9kvYBJVBQe4RrI_TMEs2pgP0xFJzrRIt8GecJm0wIy_NJozhGDvKy-bEI0NYRAdMtuo8-JxyW',
  },
  {
    id: 3,
    angle: 'Interior View',
    icon: 'airline_seat_recline_normal',
    description: 'Open the driver door and capture the full dashboard and front seats.',
    tips: ['Show dashboard condition', 'Include steering wheel', 'Capture seat wear'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnPvFtmbNZJwbRlZjDzKUP_O9tjlNTGYjgPdBwQXJiWjRJAHEEDzbAMgx6QjDUPDYRy3jZbjUmUcK7IOISnl_dCEOundCqeS3k-mE07nbCq1XusSHLJ4eZAliuBIhDnjIc4A2wnXRD262_KF8PMNdoXs_wulk04HAdm5CnljxMK1upEx5AssgVMuTJCzK84311YoNBlbpHAhBuWjJZp8_MECk4w_c7411xYTecW0_jtvxs0-M0H8_vgwlojf_QpmzsP4-Ytfzp9hIZ',
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
              transition: theme.transitions.default,
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
                  color: theme.colors.text,
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



