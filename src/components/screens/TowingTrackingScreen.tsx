'use client'

// Towing Tracking / Dispatch Map Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { IMAGES } from '@/constants/images';
import { Icon, Button } from '@/components/ui';

const TowingTrackingScreen: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{
      position: 'relative',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: theme.colors.gray200,
      paddingTop: 54,
    }}>
      {/* Map Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("${IMAGES.MAP_TRACKING}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8,
      }} />

      {/* Route Line (SVG) */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.15))',
        }}
      >
        <path
          d="M 180,250 C 220,350 280,450 320,550"
          fill="none"
          stroke={theme.colors.primary}
          strokeWidth="6"
          strokeDasharray="12 4"
          strokeLinecap="round"
        />
      </svg>

      {/* Truck Marker */}
      <div style={{
        position: 'absolute',
        top: 230,
        left: 160,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10,
      }}>
        <div style={{
          padding: theme.spacing.sm,
          borderRadius: theme.borderRadius.full,
          backgroundColor: theme.colors.surfaceLight,
          border: `2px solid ${theme.colors.primary}`,
          boxShadow: theme.shadows.floating,
        }}>
          <Icon name="local_shipping" size={28} color={theme.colors.primary} />
        </div>
        <div style={{
          marginTop: 4,
          padding: '4px 8px',
          borderRadius: theme.borderRadius.md,
          backgroundColor: theme.colors.surfaceLight,
          boxShadow: theme.shadows.sm,
        }}>
          <span style={{
            fontSize: theme.fontSizes.xs,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.primary,
          }}>
            5 min
          </span>
        </div>
      </div>

      {/* Destination Marker */}
      <div style={{
        position: 'absolute',
        top: 550,
        left: 320,
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Pulse Ring */}
          <div style={{
            position: 'absolute',
            width: 64,
            height: 64,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.3),
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          {/* Dot */}
          <div style={{
            width: 24,
            height: 24,
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.primary,
            border: `4px solid ${theme.colors.surfaceLight}`,
            boxShadow: theme.shadows.lg,
          }} />
        </div>
      </div>

      {/* Top Controls */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.md,
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 20,
      }}>
        <button
          onClick={() => router.back()}
          style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.surfaceLight,
            boxShadow: theme.shadows.lg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="arrow_back" size={24} />
        </button>
        <button style={{
          width: 48,
          height: 48,
          borderRadius: theme.borderRadius.full,
          backgroundColor: theme.colors.surfaceLight,
          boxShadow: theme.shadows.lg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="my_location" size={24} />
        </button>
      </div>

      {/* Bottom Sheet */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.surfaceLight,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        boxShadow: '0 -4px 30px rgba(0,0,0,0.12)',
        padding: theme.spacing.lg,
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.xl,
        zIndex: 30,
      }}>
        {/* Handle */}
        <div style={{
          width: 48,
          height: 6,
          backgroundColor: theme.colors.gray300,
          borderRadius: theme.borderRadius.full,
          margin: '0 auto',
          marginBottom: theme.spacing.lg,
        }} />

        {/* Status */}
        <div style={{ marginBottom: theme.spacing.lg }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            marginBottom: 4,
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.primary,
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.primary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Tow Truck En Route
            </span>
          </div>
          <h1 style={{
            fontSize: 32,
            fontWeight: theme.fontWeights.extrabold,
          }}>
            5 mins away
          </h1>
        </div>

        {/* Driver Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.md,
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius['2xl'],
          backgroundColor: theme.colors.backgroundLight,
          border: `1px solid ${theme.colors.borderLight}`,
          marginBottom: theme.spacing.lg,
        }}>
          {/* Avatar */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: theme.borderRadius.full,
              backgroundImage: `url("${IMAGES.DRIVER_AVATAR}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: `2px solid ${theme.colors.surfaceLight}`,
              boxShadow: theme.shadows.sm,
            }} />
            <div style={{
              position: 'absolute',
              bottom: -4,
              right: -4,
              padding: 4,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.surfaceLight,
              border: `1px solid ${theme.colors.borderLight}`,
            }}>
              <Icon name="star" size={12} color={theme.colors.yellow} filled />
            </div>
          </div>
          
          {/* Driver Details */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}>
              <h3 style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
              }}>
                Ahmad
              </h3>
              <span style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.bold,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}>
                4.8 <span style={{ color: theme.colors.yellow, fontSize: theme.fontSizes.xs }}>★</span>
              </span>
            </div>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              marginTop: 2,
            }}>
              3-Ton Lorry â€¢ BKE 4829
            </p>
          </div>

          {/* Chat Button */}
          <button style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon name="chat" size={20} color={theme.colors.primary} />
          </button>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
          <Button
            fullWidth
            size="lg"
            icon="call"
            onClick={() => {}}
            style={{
              boxShadow: `0 8px 20px ${withOpacity(theme.colors.primary, 0.25)}`,
            }}
          >
            Call Driver
          </Button>
          <button
            onClick={() => router.push('/success')}
            style={{
              padding: theme.spacing.sm,
              color: theme.colors.alertOrangeDark,
              fontWeight: theme.fontWeights.semibold,
              textAlign: 'center',
            }}
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default TowingTrackingScreen;



