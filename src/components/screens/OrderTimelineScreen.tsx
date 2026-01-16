'use client'

// Order Timeline Screen - Shows progress of scrap order from submission to completion
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card,
  PageContainer,
  PageHeader,
  ContentArea,
  Badge
} from '@/components/ui';

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  timestamp?: string;
  icon: string;
  details?: string[];
}

const OrderTimelineScreen: React.FC = () => {
  const router = useRouter();
  
  // Sample timeline data - in real app, this would come from API
  const [timelineSteps] = useState<TimelineStep[]>([
    {
      id: '1',
      title: 'Order Submitted',
      description: 'Your scrap request has been received',
      status: 'completed',
      timestamp: '15 Jan 2026, 10:30 AM',
      icon: 'check_circle',
      details: [
        'Vehicle: Proton Saga 1.3',
        'Plate: WXX 1234',
        'Estimated value: RM 850',
      ],
    },
    {
      id: '2',
      title: 'AI Valuation Complete',
      description: 'Vehicle condition assessed successfully',
      status: 'completed',
      timestamp: '15 Jan 2026, 10:35 AM',
      icon: 'assessment',
      details: [
        'Condition: Fair',
        'Final value: RM 850',
      ],
    },
    {
      id: '3',
      title: 'Documents Verified',
      description: 'Identity and vehicle documents approved',
      status: 'completed',
      timestamp: '15 Jan 2026, 11:00 AM',
      icon: 'verified_user',
      details: [
        'MyKad verified',
        'VOC verified',
        'Number plate verified',
      ],
    },
    {
      id: '4',
      title: 'Pickup Scheduled',
      description: 'Tow truck on the way to your location',
      status: 'current',
      timestamp: '15 Jan 2026, 2:00 PM',
      icon: 'local_shipping',
      details: [
        'Driver: Ahmad bin Ali',
        'Truck: ABC 1234',
        'ETA: 25 minutes',
      ],
    },
    {
      id: '5',
      title: 'Vehicle Collected',
      description: 'Vehicle picked up from your address',
      status: 'pending',
      icon: 'done_all',
    },
    {
      id: '6',
      title: 'JPJ Deregistration',
      description: 'Processing vehicle deregistration with JPJ',
      status: 'pending',
      icon: 'description',
    },
    {
      id: '7',
      title: 'Payment Released',
      description: 'Payment transferred to your bank account',
      status: 'pending',
      icon: 'payments',
    },
    {
      id: '8',
      title: 'Order Complete',
      description: 'Certificate ready for download',
      status: 'pending',
      icon: 'celebration',
    },
  ]);

  const currentStepIndex = timelineSteps.findIndex(step => step.status === 'current');
  const completedSteps = timelineSteps.filter(step => step.status === 'completed').length;
  const progress = (completedSteps / timelineSteps.length) * 100;

  return (
    <PageContainer>
      <PageHeader
        title="Order Timeline"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea style={{ padding: theme.spacing.md }}>
        {/* Progress Summary Card */}
        <Card style={{ marginBottom: theme.spacing.xl }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: theme.spacing.md,
          }}>
            <div>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                marginBottom: theme.spacing.xs,
              }}>
                Scrap Order
              </p>
              <h3 style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.xs,
              }}>
                #SO-2026-001234
              </h3>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}>
                {completedSteps} of {timelineSteps.length} steps completed
              </p>
            </div>
            <Badge variant="primary" icon="schedule">
              In Progress
            </Badge>
          </div>

          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: 8,
            backgroundColor: theme.colors.gray200,
            borderRadius: theme.borderRadius.full,
            overflow: 'hidden',
            marginBottom: theme.spacing.sm,
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.full,
              transition: 'width 0.3s ease',
            }} />
          </div>

          <p style={{
            fontSize: theme.fontSizes.xs,
            color: theme.colors.textSecondary,
            textAlign: 'right',
          }}>
            {Math.round(progress)}% Complete
          </p>
        </Card>

        {/* Current Status Card */}
        {currentStepIndex >= 0 && (
          <Card style={{
            marginBottom: theme.spacing.lg,
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
            color: theme.colors.textLight,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: theme.spacing.md }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: theme.borderRadius.xl,
                backgroundColor: withOpacity('#fff', 0.2),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon name={timelineSteps[currentStepIndex].icon} size={24} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.xs,
                  marginBottom: theme.spacing.xs,
                }}>
                  <h4 style={{
                    fontSize: theme.fontSizes.base,
                    fontWeight: theme.fontWeights.bold,
                    color: '#fff',
                  }}>
                    Current Status
                  </h4>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: theme.colors.alertOrange,
                    animation: 'pulse 2s infinite',
                  }} />
                </div>
                <p style={{
                  fontSize: theme.fontSizes.lg,
                  fontWeight: theme.fontWeights.semibold,
                  marginBottom: theme.spacing.xs,
                  color: '#fff',
                }}>
                  {timelineSteps[currentStepIndex].title}
                </p>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  opacity: 1,
                  color: '#fff',
                  lineHeight: 1.5,
                }}>
                  {timelineSteps[currentStepIndex].description}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {timelineSteps.map((step, index) => {
            const isLast = index === timelineSteps.length - 1;
            
            return (
              <div
                key={step.id}
                style={{
                  position: 'relative',
                  paddingLeft: 56,
                  paddingBottom: isLast ? 0 : theme.spacing.xl,
                }}
              >
                {/* Vertical Line */}
                {!isLast && (
                  <div style={{
                    position: 'absolute',
                    left: 19,
                    top: 48,
                    bottom: 0,
                    width: 2,
                    backgroundColor: step.status === 'completed' 
                      ? theme.colors.primary 
                      : theme.colors.gray300,
                  }} />
                )}

                {/* Icon Circle */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 40,
                  height: 40,
                  borderRadius: theme.borderRadius.full,
                  backgroundColor: 
                    step.status === 'completed' ? theme.colors.primary :
                    step.status === 'current' ? theme.colors.alertOrange :
                    theme.colors.gray300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `3px solid ${
                    step.status === 'completed' ? withOpacity(theme.colors.primary, 0.2) :
                    step.status === 'current' ? withOpacity(theme.colors.alertOrange, 0.2) :
                    withOpacity(theme.colors.gray300, 0.2)
                  }`,
                  boxShadow: step.status === 'current' ? theme.shadows.primary : 'none',
                }}>
                  <Icon 
                    name={step.icon} 
                    size={20} 
                    color={step.status === 'pending' ? theme.colors.gray500 : '#fff'}
                    filled={step.status === 'completed'}
                  />
                </div>

                {/* Content */}
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: theme.spacing.xs,
                  }}>
                    <h4 style={{
                      fontSize: theme.fontSizes.base,
                      fontWeight: theme.fontWeights.bold,
                      color: step.status === 'pending' 
                        ? theme.colors.textSecondary 
                        : step.status === 'current'
                        ? theme.colors.alertOrange
                        : theme.colors.textPrimary,
                    }}>
                      {step.title}
                    </h4>
                    {step.status === 'current' && (
                      <Badge variant="warning" size="sm">
                        Active
                      </Badge>
                    )}
                    {step.status === 'completed' && (
                      <Badge variant="success" size="sm">
                        Done
                      </Badge>
                    )}
                  </div>

                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.textSecondary,
                    marginBottom: step.timestamp ? theme.spacing.xs : 0,
                  }}>
                    {step.description}
                  </p>

                  {step.timestamp && (
                    <p style={{
                      fontSize: theme.fontSizes.xs,
                      color: theme.colors.textSecondary,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      marginBottom: step.details ? theme.spacing.sm : 0,
                    }}>
                      <Icon name="schedule" size={14} color={theme.colors.textSecondary} />
                      {step.timestamp}
                    </p>
                  )}

                  {step.details && step.details.length > 0 && (
                    <Card style={{
                      marginTop: theme.spacing.sm,
                      backgroundColor: withOpacity(theme.colors.primary, 0.05),
                      border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
                      padding: theme.spacing.sm,
                    }}>
                      {step.details.map((detail, idx) => (
                        <p
                          key={idx}
                          style={{
                            fontSize: theme.fontSizes.xs,
                            color: theme.colors.textSecondary,
                            marginBottom: idx < step.details!.length - 1 ? 4 : 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                          }}
                        >
                          <span style={{
                            width: 4,
                            height: 4,
                            borderRadius: theme.borderRadius.full,
                            backgroundColor: theme.colors.primary,
                          }} />
                          {detail}
                        </p>
                      ))}
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
          marginTop: theme.spacing.xl,
          paddingTop: theme.spacing.xl,
          borderTop: `1px solid ${theme.colors.borderLight}`,
        }}>
          {currentStepIndex >= 3 && (
            <Button
              variant="primary"
              icon="location_on"
              onClick={() => router.push('/tracking')}
            >
              Track Tow Truck
            </Button>
          )}
          
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
};

export default OrderTimelineScreen;
