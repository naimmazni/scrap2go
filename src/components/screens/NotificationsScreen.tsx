'use client'

// Notifications Screen
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme } from '@/lib/theme';
import { Icon, PageContainer, PageHeader, ContentArea, NotificationItem } from '@/components/ui';

const notifications = [
  {
    id: 1,
    type: 'success',
    icon: 'check_circle',
    title: 'Booking Confirmed',
    description: 'Your tow truck has been dispatched. ETA: 15 mins.',
    time: '2 mins ago',
    unread: true,
  },
  {
    id: 2,
    type: 'info',
    icon: 'local_shipping',
    title: 'Driver Assigned',
    description: 'Ahmad (â˜… 4.8) will pick up your vehicle.',
    time: '5 mins ago',
    unread: true,
  },
  {
    id: 3,
    type: 'warning',
    icon: 'schedule',
    title: 'Pickup Reminder',
    description: 'Your scheduled pickup is tomorrow at 10:00 AM.',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 4,
    type: 'success',
    icon: 'payments',
    title: 'Payment Received',
    description: 'RM 1,200.00 has been transferred to your bank.',
    time: '2 days ago',
    unread: false,
  },
  {
    id: 5,
    type: 'info',
    icon: 'description',
    title: 'Certificate Ready',
    description: 'Your JPJ deregistration certificate is ready to download.',
    time: '3 days ago',
    unread: false,
  },
  {
    id: 6,
    type: 'promo',
    icon: 'local_offer',
    title: 'Refer & Earn',
    description: 'Invite friends and earn RM 50 for each successful referral!',
    time: '1 week ago',
    unread: false,
  },
];

const NotificationsScreen: React.FC = () => {
  const router = useRouter();

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <PageContainer>
      <PageHeader
        title="Notifications"
        showBack
        onBack={() => router.back()}
        rightAction={
          <button style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}>
            <Icon name="settings" size={22} color={theme.colors.textSecondary} />
          </button>
        }
      />

      <ContentArea style={{ paddingBottom: theme.spacing.lg }}>
        {/* Unread Count */}
        {unreadCount > 0 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: `${theme.spacing.md} ${theme.spacing.lg}`,
          }}>
            <span style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              {unreadCount} unread notifications
            </span>
            <button style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.primary,
            }}>
              Mark all as read
            </button>
          </div>
        )}

        {/* Notification List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type as 'success' | 'info' | 'warning' | 'promo'}
              icon={notification.icon}
              title={notification.title}
              description={notification.description}
              time={notification.time}
              unread={notification.unread}
              onClick={() => router.push(`/notification/${notification.id}`)}
            />
          ))}
        </div>
      </ContentArea>
    </PageContainer>
  );
};

export default NotificationsScreen;



