'use client'

// Location Picker Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Input } from '@/components/ui';

const LocationPickerScreen: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{
      position: 'relative',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      paddingTop: 54,
    }}>
      {/* Map Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAunzqwogoBz379WYGDykhwrAS0oObtp4Wl6QZ0sO4Gvx5aqxR_F9dGmE4c8kbo3ZMGMi7Lulh8jFi4JiI3sDw7lLQrvNybll-e-3xSARzcpQriZxnsTvuZklI5EmvV2Y8jcEAgo6jsGu7lW12lgWbFxrkvsnHeMU6Rlixl1reeBHBUzzxsf6EwXUqPRz3XhjjPki5klSZ7OtgVB6mi35UobyKHDLOOAbYHq2---wf_czy0_rpB0m22vhStYjjzVbeJQ_rHtHvJH4Ii")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(20%)',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: withOpacity('#fff', 0.1),
        }} />
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
        top: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.md,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.5), transparent)',
        zIndex: 20,
      }}>
        <div style={{
          position: 'relative',
          maxWidth: 400,
          margin: '0 auto',
        }}>
          <div style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
          }}>
            <Icon name="search" size={24} color={theme.colors.primary} />
          </div>
          <input
            type="text"
            placeholder="Enter pickup address..."
            style={{
              width: '100%',
              height: 56,
              paddingLeft: 48,
              paddingRight: 48,
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.medium,
              border: 'none',
              borderRadius: theme.borderRadius.xl,
              backgroundColor: theme.colors.surfaceLight,
              boxShadow: theme.shadows.floating,
              outline: 'none',
            }}
          />
          <button style={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            padding: theme.spacing.sm,
            color: theme.colors.textMuted,
          }}>
            <Icon name="mic" size={20} />
          </button>
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
    </div>
  );
};

export default LocationPickerScreen;



