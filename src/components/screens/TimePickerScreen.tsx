'use client'

// Time Slot Picker Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Card, Badge, ProgressBar } from '@/components/ui';

const TimePickerScreen: React.FC = () => {
  const router = useRouter();
  const [pickupType, setPickupType] = useState('scheduled');
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const times = ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: theme.colors.surfaceLight,
      position: 'relative',
      paddingTop: 54,
    }}>
      {/* Header */}
      <div style={{
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        borderBottom: 'none',
        position: 'sticky',
        top: 0,
        backgroundColor: 'transparent',
        zIndex: 20,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="arrow_back" size={24} />
          </button>
          <h2 style={{
            flex: 1,
            textAlign: 'center',
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.bold,
          }}>
            Schedule Pickup
          </h2>
          <div style={{ width: 40 }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: theme.spacing.lg,
        paddingBottom: 140,
        overflowY: 'auto',
      }}>
        <h1 style={{
          fontSize: 26,
          fontWeight: theme.fontWeights.bold,
          marginBottom: theme.spacing.sm,
        }}>
          When should we pick up your car?
        </h1>
        <p style={{
          fontSize: theme.fontSizes.sm,
          color: theme.colors.textSecondary,
          marginBottom: theme.spacing.lg,
          lineHeight: 1.5,
        }}>
          Choose the option that works best for you. Free cancellation up to 2 hours before pickup.
        </p>

        {/* Pickup Type Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          {/* Immediate */}
          <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: theme.spacing.md,
            padding: theme.spacing.lg,
            borderRadius: theme.borderRadius.xl,
            border: `2px solid ${pickupType === 'immediate' ? theme.colors.primary : theme.colors.borderLight}`,
            backgroundColor: pickupType === 'immediate' ? withOpacity(theme.colors.primary, 0.05) : theme.colors.surfaceLight,
            cursor: 'pointer',
            transition: `all ${theme.transitions.fast}`,
          }}>
            <input
              type="radio"
              name="pickupType"
              checked={pickupType === 'immediate'}
              onChange={() => setPickupType('immediate')}
              style={{ marginTop: 4, accentColor: theme.colors.primary }}
            />
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  fontWeight: theme.fontWeights.semibold,
                }}>
                  <Icon name="bolt" size={20} color={theme.colors.alertOrange} />
                  Immediate Pickup
                </span>
                <Badge variant="warning" size="sm">24h Guarantee</Badge>
              </div>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}>
                Fastest option. We'll dispatch a truck immediately.
              </p>
            </div>
          </label>

          {/* Scheduled */}
          <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: theme.spacing.md,
            padding: theme.spacing.lg,
            borderRadius: theme.borderRadius.xl,
            border: `2px solid ${pickupType === 'scheduled' ? theme.colors.primary : theme.colors.borderLight}`,
            backgroundColor: pickupType === 'scheduled' ? withOpacity(theme.colors.primary, 0.05) : theme.colors.surfaceLight,
            cursor: 'pointer',
            transition: `all ${theme.transitions.fast}`,
          }}>
            <input
              type="radio"
              name="pickupType"
              checked={pickupType === 'scheduled'}
              onChange={() => setPickupType('scheduled')}
              style={{ marginTop: 4, accentColor: theme.colors.primary }}
            />
            <div style={{ flex: 1 }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                fontWeight: theme.fontWeights.semibold,
              }}>
                <Icon name="calendar_clock" size={20} color={theme.colors.primary} filled />
                Schedule for Later
              </span>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                marginTop: 4,
              }}>
                Choose a specific date and time for pickup.
              </p>
            </div>
          </label>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          backgroundColor: theme.colors.borderLight,
          margin: `${theme.spacing.lg} 0`,
        }} />

        {/* Calendar */}
        <h3 style={{
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeights.bold,
          marginBottom: theme.spacing.md,
        }}>
          Select Date
        </h3>
        <Card padding="md" style={{ marginBottom: theme.spacing.lg }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: theme.spacing.md,
            padding: `0 ${theme.spacing.sm}`,
          }}>
            <button style={{
              width: 32,
              height: 32,
              borderRadius: theme.borderRadius.full,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="chevron_left" size={20} color={theme.colors.textSecondary} />
            </button>
            <span style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.bold,
            }}>
              October 2023
            </span>
            <button style={{
              width: 32,
              height: 32,
              borderRadius: theme.borderRadius.full,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="chevron_right" size={20} color={theme.colors.textSecondary} />
            </button>
          </div>

          {/* Day Labels */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 4,
            marginBottom: theme.spacing.sm,
          }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  fontSize: theme.fontSizes.xs,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textMuted,
                  textTransform: 'uppercase',
                  padding: theme.spacing.sm,
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 4,
          }}>
            {/* Empty cells */}
            {[...Array(4)].map((_, i) => (
              <div key={`empty-${i}`} style={{ aspectRatio: '1' }} />
            ))}
            {/* Date cells */}
            {[...Array(12)].map((_, i) => {
              const date = i + 1;
              const isSelected = date === selectedDate;
              const isPast = date < 4;
              
              return (
                <button
                  key={date}
                  onClick={() => !isPast && setSelectedDate(date)}
                  disabled={isPast}
                  style={{
                    aspectRatio: '1',
                    borderRadius: theme.borderRadius.full,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: theme.fontSizes.sm,
                    fontWeight: isSelected ? theme.fontWeights.bold : theme.fontWeights.medium,
                    backgroundColor: isSelected ? theme.colors.primary : 'transparent',
                    color: isSelected ? theme.colors.textLight : isPast ? theme.colors.textMuted : theme.colors.textPrimary,
                    boxShadow: isSelected ? theme.shadows.primary : 'none',
                    cursor: isPast ? 'not-allowed' : 'pointer',
                  }}
                >
                  {date}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Time Slots */}
        <h3 style={{
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeights.bold,
          marginBottom: theme.spacing.sm,
        }}>
          Available Time
        </h3>
        <div style={{
          display: 'flex',
          gap: theme.spacing.sm,
          overflowX: 'auto',
          paddingBottom: theme.spacing.sm,
          marginRight: '-1.5rem',
          paddingRight: theme.spacing.lg,
        }}>
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              style={{
                flexShrink: 0,
                padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
                borderRadius: theme.borderRadius.xl,
                minWidth: 100,
                fontWeight: theme.fontWeights.semibold,
                fontSize: theme.fontSizes.sm,
                backgroundColor: selectedTime === time ? theme.colors.primary : theme.colors.surfaceLight,
                color: selectedTime === time ? theme.colors.textLight : theme.colors.textPrimary,
                border: `1px solid ${selectedTime === time ? theme.colors.primary : theme.colors.borderLight}`,
                boxShadow: selectedTime === time ? theme.shadows.primary : theme.shadows.sm,
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        backgroundColor: theme.colors.surfaceLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
        zIndex: 30,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: theme.fontSizes.sm,
          marginBottom: theme.spacing.sm,
          padding: `0 4px`,
        }}>
          <span style={{ color: theme.colors.textSecondary }}>Selected:</span>
          <span style={{ fontWeight: theme.fontWeights.bold }}>
            Oct {selectedDate}, {selectedTime}
          </span>
        </div>
        <Button
          fullWidth
          size="lg"
          iconRight="arrow_forward"
          onClick={() => router.push('/order-timeline')}
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default TimePickerScreen;



