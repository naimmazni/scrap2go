'use client'

// Profile Settings Screen - Complete profile management with personal info, payout, and security
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { IMAGES } from '@/constants/images';
import { 
  Icon, 
  Button, 
  Card, 
  PageHeader, 
  Input, 
  BottomNav,
  PageContainer,
  ContentArea,
  SectionTitle,
  Avatar,
  ToggleSwitch,
  ListItem
} from '@/components/ui';

const ProfileSettingsScreen: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'Ali Bin Abu',
    phone: '+60 12-345 6789',
    email: 'ali.abu@gmail.com',
  });
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') router.push('/home');
    else if (tabId === 'history') router.push('/history');
  };

  const handleSave = () => {
    alert('Changes saved successfully!');
  };

  return (
    <PageContainer>
      {/* Header */}
      <PageHeader
        title="Profile Settings"
        showBack
        onBack={() => router.back()}
      />

      {/* Scrollable Content */}
      <ContentArea style={{ paddingBottom: 180 }}>
        {/* Profile Avatar Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.md,
        }}>
          <Avatar
            src={IMAGES.PROFILE_AVATAR}
            size={112}
            editable
            onEdit={() => alert('Edit avatar')}
          />

          {/* Name & Subtitle */}
          <div style={{
            marginTop: theme.spacing.md,
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
            }}>
              Ali Bin Abu
            </p>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              marginTop: 4,
            }}>
              Tap to edit photo
            </p>
          </div>
        </div>

        {/* Personal Information Section */}
        <div style={{ padding: theme.spacing.md }}>
          <SectionTitle title="Personal Information" />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            {/* Full Name */}
            <Input
              label="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />

            {/* Phone Number (Locked) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
              <label style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
              }}>
                Phone Number
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: theme.colors.gray100,
                borderRadius: theme.borderRadius.lg,
                border: `1px solid ${theme.colors.borderLight}`,
                overflow: 'hidden',
              }}>
                <input
                  value={formData.phone}
                  readOnly
                  style={{
                    flex: 1,
                    height: 56,
                    padding: `0 ${theme.spacing.md}`,
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: theme.fontSizes.base,
                    color: theme.colors.textSecondary,
                    cursor: 'not-allowed',
                  }}
                />
                <div style={{ padding: theme.spacing.md }}>
                  <Icon name="lock" size={20} color={theme.colors.textMuted} />
                </div>
              </div>
            </div>

            {/* Email */}
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Payout Method Section */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SectionTitle title="Payout Method" />

          <Card
            padding="md"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.md,
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: theme.borderRadius.full,
                backgroundColor: withOpacity(theme.colors.warning, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="account_balance" size={24} color={theme.colors.amber} />
              </div>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                }}>
                  Maybank
                </p>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textSecondary,
                }}>
                  **** 8821
                </p>
              </div>
            </div>

            <button style={{
              padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
              backgroundColor: 'transparent',
              color: theme.colors.primary,
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.medium,
              borderRadius: theme.borderRadius.md,
            }}>
              Edit
            </button>
          </Card>
        </div>

        {/* Security Section */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SectionTitle title="Security" />

          <Card padding="none">
            <ListItem
              icon="lock_reset"
              label="Change Password"
              onClick={() => router.push('/change-password')}
              showBorder
            />
            <ListItem
              icon="pin"
              label="Change App PIN"
              onClick={() => router.push('/change-pin')}
            />
          </Card>
        </div>

        {/* Preferences Section */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SectionTitle title="Preferences" />

          <Card
            padding="md"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
            }}>
              <Icon name="notifications" size={20} color={theme.colors.textSecondary} />
              <span style={{
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.medium,
                color: theme.colors.textPrimary,
              }}>
                Push Notifications
              </span>
            </div>

            <ToggleSwitch
              enabled={notificationsEnabled}
              onToggle={() => setNotificationsEnabled(!notificationsEnabled)}
            />
          </Card>
        </div>

        {/* Save Button */}
        <div style={{ padding: theme.spacing.md }}>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleSave}
            style={{
              boxShadow: theme.shadows.primary,
            }}
          >
            Save Changes
          </Button>
        </div>
      </ContentArea>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </PageContainer>
  );
};

export default ProfileSettingsScreen;



