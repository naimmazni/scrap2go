'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer, Card, PageHeader } from '@/components/ui';
import { IMAGES } from '@/constants/images';

const DriverInspectionScreen: React.FC = () => {
  const router = useRouter();

  const checklist = [
    { icon: 'settings_input_component', label: 'Engine Present' },
    { icon: 'hardware', label: 'Catalytic Converter' },
    { icon: 'palette', label: 'Original Paint/Body' },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Vehicle Inspection"
        showBack
        onBack={() => router.back()}
      />

      {/* Main Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: `${theme.spacing.lg}`,
        gap: theme.spacing.lg,
        paddingBottom: 100,
      }}>
        
        {/* Driver Info Section */}
        <div style={{
          display: 'flex',
          gap: theme.spacing.md,
          alignItems: 'center',
        }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: `3px solid ${theme.colors.primary}`,
            backgroundImage: `url("${IMAGES.DRIVER_AVATAR}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flexShrink: 0,
          }} />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}>
            <h2 style={{
              fontSize: theme.fontSizes.lg,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
              margin: 0,
            }}>
              Ali (Driver)
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: theme.colors.success || '#10B981',
              }} />
              <span style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.success || '#10B981',
              }}>
                Inspection Complete
              </span>
            </div>
          </div>
        </div>

        {/* Success Card */}
        <Card style={{
          borderRadius: theme.borderRadius.lg,
          backgroundColor: theme.colors.surfaceLight,
          padding: theme.spacing.md,
          boxShadow: theme.shadows.sm,
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
          alignItems: 'center',
          textAlign: 'center',
        }}>
          {/* Car Scan Image */}
          <div style={{
            width: '100%',
            maxWidth: 280,
            aspectRatio: '16/9',
            borderRadius: theme.borderRadius.lg,
            backgroundColor: theme.colors.backgroundLight,
            backgroundImage: `url("/cars/Honda City.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            width: '100%',
          }}>
            <h3 style={{
              fontSize: theme.fontSizes.lg,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
              margin: 0,
            }}>
              Scan Successful
            </h3>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              margin: 0,
              lineHeight: 1.5,
            }}>
              Ali has verified all components and confirmed the final vehicle valuation.
            </p>
          </div>
        </Card>

        {/* Inspection Checklist */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.sm,
        }}>
          <h3 style={{
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            margin: 0,
          }}>
            Inspection Checklist
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.sm,
          }}>
            {checklist.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: theme.colors.surfaceLight,
                  padding: theme.spacing.md,
                  borderRadius: theme.borderRadius.xl,
                  border: `1px solid ${theme.colors.borderLight}`,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.md,
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: theme.borderRadius.lg,
                    backgroundColor: withOpacity(theme.colors.primary, 0.1),
                    color: theme.colors.primary,
                  }}>
                    <Icon name={item.icon} size={24} />
                  </div>
                  <span style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                  }}>
                    {item.label}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: theme.colors.success || '#10B981',
                }}>
                  <Icon name="check" size={20} color="#fff" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Box */}
        <div style={{
          backgroundColor: withOpacity(theme.colors.primary, 0.05),
          border: `1px solid ${withOpacity(theme.colors.primary, 0.2)}`,
          borderRadius: theme.borderRadius.lg,
          padding: theme.spacing.md,
          display: 'flex',
          gap: theme.spacing.sm,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 20,
            color: theme.colors.primary,
          }}>
            <Icon name="info" size={20} />
          </div>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.medium,
            color: theme.colors.textPrimary,
            lineHeight: 1.5,
            margin: 0,
          }}>
            Please hand over the physical <span style={{ fontWeight: theme.fontWeights.bold, color: theme.colors.primary }}>Vehicle Grant (Geran)</span> and <span style={{ fontWeight: theme.fontWeights.bold, color: theme.colors.primary }}>Keys</span> to the driver now.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div style={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: theme.colors.backgroundLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        padding: theme.spacing.lg,
        zIndex: 50,
      }}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => router.push('/ownership-transfer')}
          style={{
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.sm,
          }}
        >
          <span>Sign & Secure Payment</span>
          <Icon name="arrow_forward" size={20} color="#fff" />
        </Button>
      </div>
    </PageContainer>
  );
};

export default DriverInspectionScreen;
