'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { IMAGES } from '@/constants/images';
import { Icon, Button, Card, Badge, BottomNav, PageContainer, ContentArea } from '@/components/ui';

// --- Sub-Components ---

const HomeHeader = ({ onNotificationClick }: { onNotificationClick: () => void }) => (
  <header style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    backgroundColor: theme.colors.backgroundLight,
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.sticky,
    minHeight: 64,
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src="/scrap2go-logo.png" 
        alt="Scrap2Go"
        style={{
          height: 32,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>

    <button
      onClick={onNotificationClick}
      aria-label="Notifications"
      style={{
        position: 'relative',
        width: 40,
        height: 40,
        borderRadius: theme.borderRadius.full,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <Icon name="notifications" size={24} />
      <span style={{
        position: 'absolute',
        top: 6,
        right: 6,
        width: 10,
        height: 10,
        borderRadius: theme.borderRadius.full,
        backgroundColor: theme.colors.alertOrange,
        border: `2px solid ${theme.colors.backgroundLight}`,
      }} />
    </button>
  </header>
);

const ActiveOrderCard = ({ onClick }: { onClick: () => void }) => (
  <Card style={{ 
    padding: theme.spacing.lg,
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.md,
    cursor: 'pointer',
  }}
  onClick={onClick}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: theme.spacing.sm }}>
      <div>
        <p style={{ fontSize: theme.fontSizes.xs, opacity: 0.8, marginBottom: 4 }}>Active Order</p>
        <h3 style={{ fontSize: theme.fontSizes.lg, fontWeight: theme.fontWeights.bold }}>#SO-2026-001234</h3>
      </div>
      <Badge variant="warning" size="sm">In Progress</Badge>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs, marginBottom: theme.spacing.md }}>
      <Icon name="local_shipping" size={16} color="#fff" />
      <span style={{ fontSize: theme.fontSizes.sm }}>Pickup Scheduled • Today 2:00 PM</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: theme.fontSizes.sm, opacity: 0.9 }}>View Timeline</span>
      <Icon name="arrow_forward" size={20} color="#fff" />
    </div>
  </Card>
);

const HeroSection = () => (
  <Card style={{ padding: 0, overflow: 'hidden' }}>
    <div style={{
      position: 'relative',
      height: 160,
      backgroundImage: `url("/home_page-car.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
      }} />
      <div style={{ position: 'absolute', bottom: 12, left: 16 }}>
        <Badge variant="primary" size="sm">Instant Quote</Badge>
      </div>
    </div>
    <div style={{ padding: theme.spacing.lg }}>
      <h2 style={{
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeights.bold,
        marginBottom: theme.spacing.sm,
      }}>
        Get Instant Price for Your Old Car
      </h2>
      <p style={{
        fontSize: theme.fontSizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: 1.5,
      }}>
        Turn your scrap car into cash instantly. We handle free towing and official deregistration for you.
      </p>
    </div>
  </Card>
);

const ScanButton = ({ onClick }: { onClick: () => void }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing.xl} 0`,
  }}>
    <div style={{ position: 'relative' }}>
      {/* Outer rings for visual effect */}
      <div style={{
        position: 'absolute', inset: -20, borderRadius: theme.borderRadius.full,
        backgroundColor: withOpacity(theme.colors.primary, 0.2),
      }} />
      <div style={{
        position: 'absolute', inset: -10, borderRadius: theme.borderRadius.full,
        backgroundColor: withOpacity(theme.colors.primary, 0.3),
      }} />
      
      <button
        onClick={onClick}
        style={{
          position: 'relative',
          width: 160,
          height: 160,
          borderRadius: theme.borderRadius.full,
          background: `linear-gradient(180deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
          boxShadow: `0 8px 24px ${withOpacity(theme.colors.primary, 0.4)}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          border: 'none',
          cursor: 'pointer',
          transition: `all ${theme.transitions.fast}`,
        }}
      >
        <Icon name="photo_camera" size={48} color={theme.colors.textLight} />
        <span style={{ color: theme.colors.textLight, fontSize: theme.fontSizes.base, fontWeight: theme.fontWeights.bold }}>
          Scan Car
        </span>
        <span style={{ color: withOpacity(theme.colors.textLight, 0.8), fontSize: theme.fontSizes.xs, fontWeight: theme.fontWeights.medium }}>
          Start Now
        </span>
      </button>
    </div>
  </div>
);

// Reusable card for the grid
const ActionCard = ({ 
  icon, 
  iconColor = theme.colors.textSecondary, 
  iconBg, 
  title, 
  subtitle, 
  onClick 
}: any) => (
  <Card
    onClick={onClick}
    style={{
      height: 128,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
    }}
  >
    <div style={{
      width: 44,
      height: 44,
      borderRadius: theme.borderRadius.xl,
      backgroundColor: iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Icon name={icon} size={28} color={iconColor} />
    </div>
    <div>
      <p style={{ fontWeight: theme.fontWeights.bold, lineHeight: 1.3 }}>
        {title}
      </p>
      {subtitle && (
        <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary, marginTop: 4 }}>
          {subtitle}
        </p>
      )}
    </div>
  </Card>
);

const ReferralCard = ({ onClick }: { onClick: () => void }) => (
  <Card
    onClick={onClick}
    style={{
      marginTop: theme.spacing.lg,
      padding: theme.spacing.lg,
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
      color: theme.colors.textLight,
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Decorative Background Elements */}
    <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: theme.borderRadius.full, backgroundColor: withOpacity(theme.colors.textLight, 0.1) }} />
    <div style={{ position: 'absolute', bottom: -30, left: -30, width: 100, height: 100, borderRadius: theme.borderRadius.full, backgroundColor: withOpacity(theme.colors.textLight, 0.1) }} />
    
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm, marginBottom: theme.spacing.sm }}>
        <Icon name="card_giftcard" size={24} color={theme.colors.textLight} />
        <span style={{ padding: '2px 8px', borderRadius: theme.borderRadius.md, backgroundColor: withOpacity(theme.colors.textLight, 0.2), fontSize: theme.fontSizes.xs, fontWeight: theme.fontWeights.bold }}>
          Limited Offer
        </span>
      </div>
      <h3 style={{ fontSize: theme.fontSizes.lg, fontWeight: theme.fontWeights.bold, marginBottom: 4 }}>
        Refer Friends, Earn RM 50!
      </h3>
      <p style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textLight, marginBottom: theme.spacing.sm }}>
        Share your code and get rewarded for each friend
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
        <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>Learn More</span>
        <Icon name="arrow_forward" size={16} color={theme.colors.textLight} />
      </div>
    </div>
  </Card>
);

const TipCard = () => (
  <div style={{
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: withOpacity(theme.colors.alertOrange, 0.1),
    border: `1px solid ${withOpacity(theme.colors.alertOrange, 0.2)}`,
    display: 'flex',
    gap: theme.spacing.sm,
    alignItems: 'flex-start',
  }}>
    <Icon name="lightbulb" size={24} color={theme.colors.alertOrange} />
    <p style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textPrimary, lineHeight: 1.5 }}>
      <span style={{ fontWeight: theme.fontWeights.bold, color: theme.colors.alertOrange }}>
        Did you know?
      </span>{' '}
      You get extra points for scheduling pickups on weekends!
    </p>
  </div>
);

// --- Main Component ---

const HomeDashboard: React.FC = () => {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    if (tab === 'history') router.push('/history');
    if (tab === 'profile') router.push('/profile');
  };

  return (
    <PageContainer>
      <HomeHeader onNotificationClick={() => router.push('/notifications')} />

      <ContentArea 
        withBottomNav 
        style={{ 
          // 1. Basic spacing
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
          
          // 2. THE FIX: Add substantial bottom padding so the last card clears the navbar
          paddingBottom: 120, 
          
          // 3. Ensure it fills available space and allows scrolling
          flex: 1,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
        }}
      >
        <HeroSection />

        <ScanButton onClick={() => router.push('/photo-guide')} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: theme.spacing.md }}>
          <ActionCard 
            title={<>Track My<br />Towing</>}
            icon="local_shipping"
            iconBg={theme.colors.gray100}
            onClick={() => router.push('/tracking')}
          />
          <ActionCard 
            title={<>My Wallet<br />& Rewards</>}
            subtitle="RM 0.00"
            icon="account_balance_wallet"
            iconColor={theme.colors.primary}
            iconBg={withOpacity(theme.colors.primary, 0.1)}
            onClick={() => {/* Navigate to wallet */}}
          />
        </div>

        <ReferralCard onClick={() => router.push('/referral')} />

        <TipCard />
      </ContentArea>

      <BottomNav activeTab="home" onTabChange={handleTabChange} />
    </PageContainer>
  );
};

export default HomeDashboard;