'use client'

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { theme } from '@/lib/theme';
import { 
  PageContainer, 
  PageHeader, 
  ContentArea, 
  BottomNav, 
  Button, 
  Badge, 
  Icon 
} from '@/components/ui';

// --- Types ---
interface HistoryItem {
  id: number;
  plate: string;
  model: string;
  date: string;
  payout: string;
  status: 'completed' | 'archived';
  image: string;
}

// --- Mock Data ---
const historyData: HistoryItem[] = [
  {
    id: 1,
    plate: 'WXX 1234',
    model: 'Proton Saga 1.3',
    date: '15 Oct 2023',
    payout: 'RM 850.00',
    status: 'completed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAesUFmzjMMr0LU5hKyzB0EcJeBpr1MyLs3iZF18wHNH1l2PzVEnS1DFSTb4wQVMExWgLf4ADzRRJFlo4SXyDu6nA_aPBvWba5L5PRlUOjUy7iJOpHlmTYFWwwzyfS8U_7GFvOQOn4SXfyzQGqdhfGXT1c_gAiu5M5AdLSkA254ZtmXEphFvOOrlxiov9HnhAsh_4KnZ0K2CiNQcLxv4WOS8A4WCvksVK3_a71mBbqjjzLbOoMsc6-VkFawn4PZ1OBhNc-xQHVABbaA',
  },
  {
    id: 2,
    plate: 'BGT 8829',
    model: 'Toyota Vios 1.5J',
    date: '02 Feb 2023',
    payout: 'RM 1,200.00',
    status: 'completed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm0PqIn8e2JTb12p86u2EKJSG4q2SrRekuG03sOjAmHHkxePz775XYv-EMN8azcRusBTJehpjK0Qef2VkAh--CBsEAu-THyhBR34_oOJ39Z0WwflFSwVn0Xx5CxEo20ehHvGU_Y5G_yF5B8oGYpyRGiiqayaaZAkVtosNBDthZT_kNzR2mZCmbnDL-QKagxv5S8-9kvYBJVBQe4RrI_TMEs2pgP0xFJzrRIt8GecJm0wIy_NJozhGDvKy-bEI0NYRAdMtuo8-JxyW',
  },
  {
    id: 3,
    plate: 'WAA 5521',
    model: 'Perodua Kancil 660',
    date: '10 Dec 2021',
    payout: 'RM 350.00',
    status: 'archived',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnPvFtmbNZJwbRlZjDzKUP_O9tjlNTGYjgPdBwQXJiWjRJAHEEDzbAMgx6QjDUPDYRy3jZbjUmUcK7IOISnl_dCEOundCqeS3k-mE07nbCq1XusSHLJ4eZAliuBIhDnjIc4A2wnXRD262_KF8PMNdoXs_wulk04HAdm5CnljxMK1upEx5AssgVMuTJCzK84311YoNBlbpHAhBuWjJZp8_MECk4w_c7411xYTecW0_jtvxs0-M0H8_vgwlojf_QpmzsP4-Ytfzp9hIZ',
  },
];

// --- Sub-Components ---

const SummaryCard = ({ count, totalPayout }: { count: number; totalPayout: number }) => (
  <div style={{
    borderRadius: theme.borderRadius.xl,
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.card,
    flexShrink: 0, // Prevents shrinking when scrolling
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.md }}>
      <div>
        <p style={{ fontSize: theme.fontSizes.sm, color: 'rgba(255, 255, 255, 0.8)', marginBottom: 4 }}>
          Total Vehicles Scrapped
        </p>
        <p style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, color: '#fff', lineHeight: 1 }}>
          {count}
        </p>
      </div>
      <div style={{
        width: 56, height: 56, borderRadius: theme.borderRadius.xl,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name="directions_car" size={32} color="#fff" />
      </div>
    </div>
    
    <div style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)', marginBottom: theme.spacing.md }} />
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p style={{ fontSize: theme.fontSizes.sm, color: 'rgba(255, 255, 255, 0.8)' }}>Total Earnings</p>
      <p style={{ fontSize: theme.fontSizes.xl, fontWeight: theme.fontWeights.bold, color: '#fff' }}>
        RM {totalPayout.toFixed(2)}
      </p>
    </div>
  </div>
);

const ActiveOrderLink = ({ onClick }: { onClick: () => void }) => (
  <div 
    onClick={onClick}
    style={{
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.surfaceLight,
      borderRadius: theme.borderRadius.xl,
      border: `1px solid ${theme.colors.borderLight}`,
      marginBottom: theme.spacing.lg,
      cursor: 'pointer',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexShrink: 0, // Prevents shrinking
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
      <div style={{
        width: 40, height: 40, borderRadius: theme.borderRadius.xl,
        backgroundColor: theme.colors.primary,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name="timeline" size={20} color="#fff" />
      </div>
      <div>
        <p style={{ fontSize: theme.fontSizes.base, fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary }}>
          View Active Order Timeline
        </p>
        <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>
          Track your current scrap order progress
        </p>
      </div>
    </div>
    <Icon name="arrow_forward" size={20} color={theme.colors.primary} />
  </div>
);

const VehicleHistoryCard = ({ 
  item, 
  onClick, 
  onDownloadJPJ, 
  onDownloadReceipt 
}: { 
  item: HistoryItem; 
  onClick: () => void; 
  onDownloadJPJ: (plate: string) => void; 
  onDownloadReceipt: (plate: string) => void; 
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: theme.borderRadius.xl,
        backgroundColor: theme.colors.surfaceLight,
        boxShadow: theme.shadows.card,
        overflow: 'hidden',
        opacity: item.status === 'archived' ? 0.9 : 1,
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        flexShrink: 0, // Prevents shrinking
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.lg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.card;
      }}
    >
      {/* Image Header */}
      <div style={{
        position: 'relative', height: 160,
        backgroundImage: `url("${item.image}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: item.status === 'archived' ? 'grayscale(100%)' : 'none',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <Badge
            variant={item.status === 'completed' ? 'success' : 'gray'}
            icon={item.status === 'completed' ? 'check_circle' : 'archive'}
            size="sm"
          >
            {item.status === 'completed' ? 'Completed' : 'Archived'}
          </Badge>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 16, color: theme.colors.textLight }}>
          <p style={{ fontSize: theme.fontSizes.xs, opacity: 0.9 }}>Scrapped on</p>
          <p style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.bold }}>{item.date}</p>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: theme.spacing.lg }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: theme.spacing.md }}>
          <div>
            <h3 style={{ fontSize: theme.fontSizes['2xl'], fontWeight: theme.fontWeights.bold }}>{item.plate}</h3>
            <p style={{ fontSize: theme.fontSizes.base, color: theme.colors.textSecondary, marginTop: 4 }}>{item.model}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary, textTransform: 'uppercase', letterSpacing: 0.5 }}>Payout</p>
            <p style={{ fontSize: theme.fontSizes.xl, fontWeight: theme.fontWeights.bold, color: theme.colors.primary }}>{item.payout}</p>
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: theme.colors.borderLight, marginBottom: theme.spacing.md }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: theme.spacing.sm }}>
          <Button 
            variant="outline" 
            icon="description"
            onClick={(e) => { e.stopPropagation(); onDownloadJPJ(item.plate); }}
          >
            JPJ Cert
          </Button>
          <Button 
            icon="receipt"
            onClick={(e) => { e.stopPropagation(); onDownloadReceipt(item.plate); }}
          >
            Receipt
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

const HistoryScreen: React.FC = () => {
  const router = useRouter();

  // Memoized calculations to prevent re-running on every render
  const stats = useMemo(() => {
    const totalVehicles = historyData.length;
    const totalPayout = historyData.reduce((sum, item) => {
      // Robust parsing: remove non-numeric chars except dot
      const cleanString = item.payout.replace(/[^\d.]/g, ''); 
      return sum + (parseFloat(cleanString) || 0);
    }, 0);
    return { totalVehicles, totalPayout };
  }, []);

  // Handlers
  const handleDownloadJPJ = (plate: string) => {
    // In a real app, this would trigger an API call
    alert(`Downloading JPJ deregistration certificate for ${plate}`);
  };

  const handleDownloadReceipt = (plate: string) => {
    router.push('/receipt');
  };

  const handleViewTimeline = () => {
    router.push('/order-timeline');
  };

  const handleViewVehicleDetails = (item: HistoryItem) => {
    const params = new URLSearchParams({
      plate: item.plate,
      model: item.model,
      status: item.status,
      orderId: item.id.toString(),
    });
    router.push(`/vehicle-timeline?${params.toString()}`);
  };

  const handleNavChange = (tab: string) => {
    if (tab === 'home') router.push('/home');
    if (tab === 'profile') router.push('/profile');
  };

  return (
    <PageContainer>
      <PageHeader
        title="Scrap History"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea 
        withBottomNav 
        style={{ 
          // 1. Spacing for visual comfort
          paddingLeft: theme.spacing.md, 
          paddingRight: theme.spacing.md, 
          paddingTop: theme.spacing.md,
          
          // 2. Extra bottom padding prevents content from being hidden behind the BottomNav
          paddingBottom: 120, 

          // 3. Layout structure
          display: 'flex', 
          flexDirection: 'column', 
          gap: theme.spacing.lg,
          
          // 4. THE FIX: Enables scrolling for overflow content
          flex: 1,
          overflowY: 'auto', 
          
          // 5. Ensure smooth scrolling on iOS
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <SummaryCard 
          count={stats.totalVehicles} 
          totalPayout={stats.totalPayout} 
        />

        <ActiveOrderLink onClick={handleViewTimeline} />

        {historyData.map((item) => (
          <VehicleHistoryCard
            key={item.id}
            item={item}
            onClick={() => handleViewVehicleDetails(item)}
            onDownloadJPJ={handleDownloadJPJ}
            onDownloadReceipt={handleDownloadReceipt}
          />
        ))}
      </ContentArea>

      <BottomNav 
        activeTab="history" 
        onTabChange={handleNavChange} 
      />
    </PageContainer>
  );
};

export default HistoryScreen;