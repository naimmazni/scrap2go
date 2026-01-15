'use client'

// Notification Details Screen - View full notification content
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  Header,
  ScreenContainer,
  ScrollableContent
} from '@/components/ui';

const NotificationDetailsScreen: React.FC = () => {
  const router = useRouter();

  // In a real app, this would come from route params or state
  const notification = {
    id: 1,
    type: 'success',
    title: 'Payment Received',
    message: 'Your payout of RM 4,500 has been successfully transferred to your Maybank account ending in 8821.',
    fullContent: `
Dear Customer,

We are pleased to inform you that your payout has been successfully processed and transferred to your bank account.

Transaction Details:
- Amount: RM 4,500.00
- Bank: Maybank
- Account: ****8821
- Reference: PAY-2024-001234
- Date: 24 October 2024, 2:30 PM

The amount should reflect in your account within 1-3 business days.

If you have any questions or concerns, please don't hesitate to contact our customer support team.

Thank you for using Scrap2Go!

Best regards,
The Scrap2Go Team
    `.trim(),
    timestamp: '2 hours ago',
    date: '24 Oct 2024, 2:30 PM',
    actionLabel: 'View Transaction',
    actionRoute: '/history',
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return { name: 'check_circle', color: '#10B981' };
      case 'warning': return { name: 'warning', color: '#F59E0B' };
      case 'info': return { name: 'info', color: theme.colors.primary };
      case 'error': return { name: 'error', color: '#EF4444' };
      default: return { name: 'notifications', color: theme.colors.primary };
    }
  };

  const icon = getIcon(notification.type);

  return (
    <ScreenContainer>
      <Header
        title="Notification"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={20}>
        {/* Notification Icon */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.xl,
          paddingBottom: theme.spacing.md,
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(icon.color, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.md,
          }}>
            <Icon name={icon.name} size={40} color={icon.color} filled />
          </div>
          <h1 style={{
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            textAlign: 'center',
            marginBottom: theme.spacing.xs,
          }}>
            {notification.title}
          </h1>
          <p style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
          }}>
            {notification.timestamp}
          </p>
        </div>

        {/* Notification Content */}
        <div style={{ padding: theme.spacing.md }}>
          <Card>
            <p style={{
              fontSize: theme.fontSizes.base,
              color: theme.colors.textPrimary,
              lineHeight: 1.6,
              whiteSpace: 'pre-line',
            }}>
              {notification.fullContent}
            </p>
          </Card>
        </div>

        {/* Metadata */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{
            backgroundColor: theme.colors.gray50,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              <Icon name="schedule" size={16} color={theme.colors.textMuted} />
              <span>Sent on {notification.date}</span>
            </div>
          </Card>
        </div>

        {/* Action Button */}
        {notification.actionLabel && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <Button
              variant="primary"
              fullWidth
              onClick={() => router.push(notification.actionRoute)}
              iconRight="arrow_forward"
            >
              {notification.actionLabel}
            </Button>
          </div>
        )}

        {/* Additional Actions */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <div style={{
            display: 'flex',
            gap: theme.spacing.sm,
            justifyContent: 'center',
          }}>
            <button style={{
              padding: theme.spacing.sm,
              backgroundColor: 'transparent',
              color: theme.colors.textSecondary,
              fontSize: theme.fontSizes.sm,
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
            }}>
              <Icon name="bookmark" size={18} />
              Save
            </button>
            <div style={{
              width: 1,
              backgroundColor: theme.colors.borderLight,
            }} />
            <button style={{
              padding: theme.spacing.sm,
              backgroundColor: 'transparent',
              color: theme.colors.textSecondary,
              fontSize: theme.fontSizes.sm,
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
            }}>
              <Icon name="delete" size={18} />
              Delete
            </button>
          </div>
        </div>
      </ScrollableContent>
    </ScreenContainer>
  );
};

export default NotificationDetailsScreen;



