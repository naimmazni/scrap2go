'use client'

// Profile / Settings Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Badge, 
  BottomNav, 
  PageContainer, 
  PageHeader, 
  ContentArea,
  MenuItem 
} from '@/components/ui';

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <PageContainer>
      <PageHeader
        title="Profile"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea withBottomNav>
        {/* Avatar Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
          backgroundColor: theme.colors.surfaceLight,
          borderBottom: `1px solid ${theme.colors.borderLight}`,
        }}>
          {/* Avatar */}
          <div style={{ position: 'relative', marginBottom: theme.spacing.md }}>
            <div style={{
              width: 96,
              height: 96,
              borderRadius: theme.borderRadius.full,
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 20px ${withOpacity(theme.colors.primary, 0.25)}`,
            }}>
              <Icon name="person" size={48} color="#fff" />
            </div>
            <button 
              onClick={() => router.push('/profile-settings')}
              style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 32,
              height: 32,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.surfaceLight,
              border: `2px solid ${theme.colors.backgroundLight}`,
              boxShadow: theme.shadows.md,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="edit" size={16} color={theme.colors.primary} />
            </button>
          </div>
          
          {/* Name & Phone */}
          <h2 style={{
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.bold,
            marginBottom: 4,
          }}>
            Ali bin Ahmad
          </h2>
          <p style={{
            color: theme.colors.textSecondary,
            fontSize: theme.fontSizes.base,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.xs,
          }}>
            <Icon name="phone" size={16} />
            +60 12-345 6789
          </p>

          {/* Verified Badge */}
          <div style={{
            marginTop: theme.spacing.md,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.xs,
            padding: `${theme.spacing.xs} ${theme.spacing.md}`,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity('#10B981', 0.1),
          }}>
            <Icon name="verified" size={16} color="#10B981" filled />
            <span style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.medium,
              color: '#10B981',
            }}>
              Verified Account
            </span>
          </div>
        </div>

        {/* Menu Sections */}
        <div style={{ marginTop: theme.spacing.md }}>
          {/* Account Section */}
          <div style={{
            backgroundColor: theme.colors.surfaceLight,
            marginBottom: theme.spacing.md,
          }}>
            <p style={{
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Account
            </p>
            <MenuItem icon="badge" label="Identity Verification" badge="Complete" />
            <MenuItem icon="location_on" label="Saved Addresses" onClick={() => router.push('/saved-addresses')} />
          </div>

          {/* App Section */}
          <div style={{
            backgroundColor: theme.colors.surfaceLight,
            marginBottom: theme.spacing.md,
          }}>
            <p style={{
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              App Settings
            </p>
            <MenuItem icon="notifications" label="Notifications" onClick={() => router.push('/notifications')} badge="3" />
            <MenuItem icon="language" label="Language" onClick={() => router.push('/language-settings')} />
            <MenuItem icon="dark_mode" label="Appearance" onClick={() => router.push('/appearance-settings')} />
          </div>

          {/* Referral Section */}
          <div style={{
            backgroundColor: theme.colors.surfaceLight,
            marginBottom: theme.spacing.md,
          }}>
            <p style={{
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Earn Rewards
            </p>
            <MenuItem icon="card_giftcard" label="Refer & Earn" badge="RM 50" onClick={() => router.push('/referral')} />
          </div>

          {/* Support Section */}
          <div style={{
            backgroundColor: theme.colors.surfaceLight,
            marginBottom: theme.spacing.md,
          }}>
            <p style={{
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Support
            </p>
            <MenuItem icon="help_outline" label="Help Center" onClick={() => router.push('/help-center')} />
            <MenuItem icon="chat_bubble_outline" label="Contact Us" onClick={() => router.push('/contact-support')} />
            <MenuItem icon="description" label="Terms of Service" onClick={() => router.push('/terms-of-service')} />
            <MenuItem icon="privacy_tip" label="Privacy Policy" onClick={() => router.push('/privacy-policy')} />
          </div>

          {/* Logout Section */}
          <div style={{
            backgroundColor: theme.colors.surfaceLight,
          }}>
            <MenuItem icon="logout" label="Log Out" danger onClick={() => setShowLogoutDialog(true)} />
          </div>
        </div>

        {/* Version */}
        <p style={{
          textAlign: 'center',
          padding: theme.spacing.lg,
          color: theme.colors.gray400,
          fontSize: theme.fontSizes.xs,
        }}>
          Scrap2Go v1.0.0
        </p>
      </ContentArea>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: theme.spacing.lg,
        }}>
          <div style={{
            backgroundColor: theme.colors.surfaceLight,
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.xl,
            maxWidth: 400,
            width: '100%',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: theme.spacing.lg,
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: theme.borderRadius.full,
                backgroundColor: withOpacity(theme.colors.error, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="logout" size={32} color={theme.colors.error} />
              </div>
            </div>

            <h3 style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
              textAlign: 'center',
              marginBottom: theme.spacing.sm,
            }}>
              Log Out
            </h3>

            <p style={{
              fontSize: theme.fontSizes.base,
              color: theme.colors.textSecondary,
              textAlign: 'center',
              marginBottom: theme.spacing.xl,
            }}>
              Are you sure you want to log out of your account?
            </p>

            <div style={{
              display: 'flex',
              gap: theme.spacing.md,
            }}>
              <Button
                variant="outline"
                fullWidth
                onClick={() => setShowLogoutDialog(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                fullWidth
                onClick={handleLogout}
                style={{
                  backgroundColor: theme.colors.error,
                }}
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <BottomNav activeTab="profile" onTabChange={(tab) => {
        if (tab === 'home') router.push('/home');
        if (tab === 'history') router.push('/history');
      }} />
    </PageContainer>
  );
};

export default ProfileScreen;



