'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageContainer, ContentArea } from '@/components/ui/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { theme } from '@/lib/theme';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  date?: string;
  time?: string;
  status: 'completed' | 'in-progress' | 'pending';
  icon: string;
}

export default function VehicleOrderTimelineScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get vehicle details from URL params
  const vehiclePlate = searchParams.get('plate') || 'N/A';
  const vehicleModel = searchParams.get('model') || 'N/A';
  const orderStatus = searchParams.get('status') || 'completed';
  const orderId = searchParams.get('orderId') || 'SO-2025-999999';

  // Mock timeline data - in real app, fetch based on orderId
  const timelineSteps: TimelineStep[] = [
    {
      id: 1,
      title: 'Order Submitted',
      description: 'Your scrap request has been successfully received',
      date: 'Dec 15, 2025',
      time: '10:30 AM',
      status: 'completed',
      icon: 'check_circle'
    },
    {
      id: 2,
      title: 'AI Valuation Complete',
      description: 'Vehicle photos analyzed and valued',
      date: 'Dec 15, 2025',
      time: '10:45 AM',
      status: 'completed',
      icon: 'smart_toy'
    },
    {
      id: 3,
      title: 'Documents Verified',
      description: 'MyKad, VOC, and ownership documents confirmed',
      date: 'Dec 15, 2025',
      time: '11:20 AM',
      status: 'completed',
      icon: 'verified'
    },
    {
      id: 4,
      title: 'Pickup Scheduled',
      description: 'Vehicle collection appointment confirmed',
      date: 'Dec 16, 2025',
      time: '2:00 PM',
      status: 'completed',
      icon: 'event'
    },
    {
      id: 5,
      title: 'Vehicle Collected',
      description: 'Tow truck picked up the vehicle from your location',
      date: 'Dec 16, 2025',
      time: '2:30 PM',
      status: 'completed',
      icon: 'local_shipping'
    },
    {
      id: 6,
      title: 'JPJ Deregistration',
      description: 'Vehicle deregistered with Road Transport Department',
      date: 'Dec 18, 2025',
      time: '3:45 PM',
      status: 'completed',
      icon: 'description'
    },
    {
      id: 7,
      title: 'Payment Released',
      description: 'Funds transferred to your bank account',
      date: 'Dec 20, 2025',
      time: '9:15 AM',
      status: 'completed',
      icon: 'payments'
    },
    {
      id: 8,
      title: 'Order Complete',
      description: 'Transaction successfully completed',
      date: 'Dec 20, 2025',
      time: '9:15 AM',
      status: 'completed',
      icon: 'celebration'
    }
  ];

  const completedSteps = timelineSteps.filter(step => step.status === 'completed').length;
  const progressPercent = (completedSteps / timelineSteps.length) * 100;

  return (
    <PageContainer>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing.lg,
        paddingTop: theme.spacing.xl,
        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
        color: 'white',
      }}>
        <Button
          variant="ghost"
          icon="arrow_back"
          onClick={() => router.back()}
          style={{ color: 'white' }}
        >
          Back
        </Button>
        <h1 style={{
          fontSize: theme.fontSizes['2xl'],
          fontWeight: theme.fontWeights.bold,
          margin: 0,
        }}>
          Order Timeline
        </h1>
        <div style={{ width: 48 }} />
      </div>

      <ContentArea>
        {/* Vehicle Info Card */}
        <div style={{
          backgroundColor: 'transparent',
          borderRadius: theme.borderRadius.xl,
          padding: theme.spacing.lg,
          marginBottom: theme.spacing.xl,
          boxShadow: 'none',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: theme.spacing.md,
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                marginBottom: theme.spacing.xs,
              }}>
                <Icon name="directions_car" size={24} color={theme.colors.primary} />
                <h2 style={{
                  fontSize: theme.fontSizes.xl,
                  fontWeight: theme.fontWeights.bold,
                  margin: 0,
                }}>
                  {vehiclePlate}
                </h2>
              </div>
              <p style={{
                fontSize: theme.fontSizes.base,
                color: theme.colors.textSecondary,
                margin: 0,
              }}>
                {vehicleModel}
              </p>
            </div>
            <Badge variant={orderStatus === 'completed' ? 'success' : 'primary'}>
              {orderStatus === 'completed' ? 'Completed' : 'In Progress'}
            </Badge>
          </div>

          <div style={{
            borderTop: `1px solid ${theme.colors.borderLight}`,
            paddingTop: theme.spacing.md,
          }}>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              margin: 0,
            }}>
              Order ID: <span style={{ 
                color: theme.colors.textPrimary,
                fontWeight: theme.fontWeights.semibold 
              }}>{orderId}</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          backgroundColor: theme.colors.surfaceLight,
          borderRadius: theme.borderRadius.xl,
          padding: theme.spacing.lg,
          marginBottom: theme.spacing.xl,
          boxShadow: theme.shadows.card,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing.sm,
          }}>
            <p style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              margin: 0,
            }}>
              Overall Progress
            </p>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.primary,
              margin: 0,
            }}>
              {completedSteps} / {timelineSteps.length}
            </p>
          </div>
          <div style={{
            height: 8,
            backgroundColor: theme.colors.gray100,
            borderRadius: theme.borderRadius.full,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
              transition: 'width 0.5s ease',
            }} />
          </div>
        </div>

        {/* Timeline Steps */}
        <div style={{
          backgroundColor: theme.colors.surfaceLight,
          borderRadius: theme.borderRadius.xl,
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.md,
          boxShadow: theme.shadows.card,
        }}>
          {timelineSteps.map((step, index) => {
            const isLast = index === timelineSteps.length - 1;
            const isCompleted = step.status === 'completed';
            const isInProgress = step.status === 'in-progress';

            return (
              <div key={step.id}>
                <div style={{
                  display: 'flex',
                  gap: theme.spacing.md,
                  paddingBottom: isLast ? 0 : theme.spacing.lg,
                }}>
                  {/* Timeline Line & Icon */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                  }}>
                    {/* Icon Circle */}
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: isCompleted 
                        ? theme.colors.success 
                        : isInProgress 
                        ? theme.colors.primary 
                        : theme.colors.gray100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isCompleted || isInProgress ? theme.shadows.md : 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                    }}>
                      <Icon 
                        name={step.icon} 
                        size={24} 
                        color={isCompleted || isInProgress ? 'white' : theme.colors.textSecondary} 
                      />
                    </div>

                    {/* Connecting Line */}
                    {!isLast && (
                      <div style={{
                        width: 2,
                        flex: 1,
                        minHeight: 40,
                        backgroundColor: isCompleted 
                          ? theme.colors.success 
                          : theme.colors.borderLight,
                        marginTop: 4,
                        marginBottom: 4,
                      }} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div style={{ flex: 1, paddingTop: 4 }}>
                    <h3 style={{
                      fontSize: theme.fontSizes.lg,
                      fontWeight: theme.fontWeights.bold,
                      color: isCompleted || isInProgress 
                        ? theme.colors.textPrimary 
                        : theme.colors.textSecondary,
                      margin: 0,
                      marginBottom: theme.spacing.xs,
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.textSecondary,
                      margin: 0,
                      marginBottom: theme.spacing.sm,
                    }}>
                      {step.description}
                    </p>
                    {step.date && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing.xs,
                      }}>
                        <Icon name="schedule" size={14} color={theme.colors.textSecondary} />
                        <p style={{
                          fontSize: theme.fontSizes.xs,
                          color: theme.colors.textSecondary,
                          margin: 0,
                        }}>
                          {step.date} at {step.time}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
        }}>
          <Button 
            icon="description"
            onClick={() => router.push('/jpj-success')}
          >
            View Official Certificate
          </Button>
          <Button 
            variant="outline" 
            icon="receipt"
            onClick={() => router.push(`/receipt?plate=${vehiclePlate}&model=${vehicleModel}`)}
          >
            View Receipt
          </Button>
          <Button 
            variant="outline" 
            icon="support_agent"
            onClick={() => router.push('/contact-support')}
          >
            Contact Support
          </Button>
        </div>
      </ContentArea>
    </PageContainer>
  );
}
