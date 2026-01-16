'use client'

// Location Picker Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { IMAGES } from '@/constants/images';
import { Icon, Button, Input, PageContainer, ContentArea } from '@/components/ui';

const LocationPickerScreen: React.FC = () => {
  const router = useRouter();

  return (
    <PageContainer style={{ overflow: 'hidden' }}>
      {/* Google Map Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
      }}>
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
          } as React.CSSProperties}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.95374486788!2d101.6263!3d3.1337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49f7e3c0001d%3A0x8dc0d6b69efb7!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1234567890"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

      {/* Center Pin */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 48,
        pointerEvents: 'none',
        zIndex: 10,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* Hint */}
          <div style={{
            marginBottom: theme.spacing.sm,
            padding: '8px 16px',
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.surfaceLight,
            boxShadow: theme.shadows.lg,
            opacity: 0.9,
          }}>
            <span style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
            }}>
              Drag map to adjust
            </span>
          </div>

          {/* Pin */}
          <div style={{
            position: 'relative',
            animation: 'bounce 2s ease-in-out infinite',
          }}>
            <Icon 
              name="location_on" 
              size={56} 
              color={theme.colors.primary}
              filled
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              }}
            />
          </div>
          
          {/* Shadow */}
          <div style={{
            width: 16,
            height: 8,
            backgroundColor: withOpacity('#000', 0.3),
            borderRadius: '100%',
            filter: 'blur(2px)',
            marginTop: -4,
          }} />
          
          {/* Pulse Ring */}
          <div style={{
            position: 'absolute',
            bottom: -20,
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.2),
            animation: 'pulse 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      {/* Search Bar */}
      <div style={{
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        padding: theme.spacing.md,
        zIndex: 20,
      }}>
        <div style={{
          position: 'relative',
          maxWidth: 400,
          margin: '0 auto',
          display: 'flex',
          gap: theme.spacing.sm,
          alignItems: 'center',
        }}>
          {/* Back Button */}
          <button
            onClick={() => router.push('/identity-verification')}
            style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: theme.colors.surfaceLight,
              boxShadow: theme.shadows.floating,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <Icon name="chevron_left" size={24} color={theme.colors.textPrimary} />
          </button>

          {/* Search Input */}
          <div style={{
            position: 'relative',
            flex: 1,
          }}>
            <input
              type="text"
              placeholder="Enter pickup address..."
              style={{
                width: '100%',
                height: 40,
                paddingRight: 40,
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.medium,
                border: 'none',
                borderRadius: theme.borderRadius.xl,
                backgroundColor: theme.colors.surfaceLight,
                boxShadow: theme.shadows.floating,
                outline: 'none',
                paddingLeft: 16,
              }}
            />
            <div style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="search" size={20} color={theme.colors.primary} />
            </div>
          </div>
        </div>
      </div>

      {/* Current Location Button */}
      <button style={{
        position: 'absolute',
        top: 120,
        right: theme.spacing.md,
        width: 48,
        height: 48,
        borderRadius: theme.borderRadius.xl,
        backgroundColor: theme.colors.surfaceLight,
        boxShadow: theme.shadows.floating,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
      }}>
        <Icon name="my_location" size={24} color={theme.colors.primary} />
      </button>

      {/* Bottom Sheet */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.surfaceLight,
        borderTopLeftRadius: theme.borderRadius['2xl'],
        borderTopRightRadius: theme.borderRadius['2xl'],
        boxShadow: '0 -8px 30px rgba(0,0,0,0.12)',
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xl,
        zIndex: 30,
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
          {/* Handle */}
          <div style={{
            width: 48,
            height: 6,
            backgroundColor: theme.colors.gray200,
            borderRadius: theme.borderRadius.full,
            margin: '0 auto',
            marginBottom: theme.spacing.lg,
          }} />

          {/* Location Details */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: theme.spacing.md,
            marginBottom: theme.spacing.lg,
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name="near_me" size={20} color={theme.colors.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.primary,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                marginBottom: 4,
              }}>
                Pickup Location
              </h2>
              <p style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
                lineHeight: 1.3,
              }}>
                123 Jalan Ampang
              </p>
              <p style={{
                fontSize: theme.fontSizes.base,
                color: theme.colors.textSecondary,
                marginTop: 2,
              }}>
                Kuala Lumpur, 50450
              </p>
            </div>
            <button style={{
              color: theme.colors.primary,
              fontWeight: theme.fontWeights.semibold,
              fontSize: theme.fontSizes.sm,
              padding: theme.spacing.sm,
            }}>
              Edit
            </button>
          </div>

          {/* Divider */}
          <div style={{
            height: 1,
            backgroundColor: theme.colors.borderLight,
            marginBottom: theme.spacing.lg,
          }} />

          {/* Confirm Button */}
          <Button
            fullWidth
            size="lg"
            iconRight="arrow_forward"
            onClick={() => router.push('/schedule')}
            style={{
              boxShadow: `0 8px 20px ${withOpacity(theme.colors.primary, 0.3)}`,
            }}
          >
            Confirm Location
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default LocationPickerScreen;



