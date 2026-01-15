'use client'

// Gallery Permission Screen - Request camera and gallery access for AI valuation
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  ScreenContainer,
  IconButton,
  SecurityNotice 
} from '@/components/ui';

const GalleryPermissionScreen: React.FC = () => {
  const router = useRouter();

  const handleAllowAccess = () => {
    router.push('/photo-guidance-ai');
  };

  const handleDeny = () => {
    router.back();
  };

  return (
    <ScreenContainer>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.sm,
      }}>
        <IconButton icon="arrow_back" onClick={() => router.back()} />
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.lg,
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.xl,
      }}>
        {/* Illustration Container */}
        <div style={{
          width: '100%',
          maxWidth: 280,
          aspectRatio: '1',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: theme.spacing.xl,
        }}>
          {/* Animated Background Circle */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            borderRadius: theme.borderRadius.full,
            transform: 'scale(0.9)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          
          {/* Car Illustration */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAqm5MLBSJyJ_SKGE8tcOiqq9dYHVw4ynYrXkMngzswv4ztBdnzLrygViPk2Nb8SdZR3zV7c2iviwq1JezAp7U24l4iFajWtHhJZKIQXo94W8uJoZy29JBo1ZWZSMDhyBwA4SKPt1ceh7eZS8D_xPqhvgq8Sf13nev54ZyFzPODjSTju7m9gRYH6PZ22xH63Ho7ussUyd9xYxK1tuMoDxZ1vjBoPbUhlEjUN-YQ7uIX5e8ZRSZifKRlk1NpXLUx2VST6ZjFJ99OJG7")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 10,
            borderRadius: theme.borderRadius.xl,
          }} />
          
          {/* Camera Icon Badge */}
          <div style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            backgroundColor: theme.colors.primary,
            color: theme.colors.textLight,
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius.xl,
            boxShadow: theme.shadows.lg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
          }}>
            <Icon name="photo_camera" size={32} />
          </div>
        </div>

        {/* Text Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 400,
        }}>
          <h1 style={{
            fontSize: theme.fontSizes['3xl'],
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
            lineHeight: 1.2,
          }}>
            Let's value your car
          </h1>
          <p style={{
            fontSize: theme.fontSizes.lg,
            color: theme.colors.textSecondary,
            lineHeight: 1.5,
          }}>
            To give you an accurate price instantly, our AI needs to see the condition of your vehicle. Please allow access to your camera and gallery.
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div style={{
        padding: theme.spacing.lg,
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.xl,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.sm,
          maxWidth: 400,
          margin: '0 auto',
        }}>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAllowAccess}
            style={{
              height: 56,
              boxShadow: theme.shadows.primary,
            }}
          >
            Allow Access
          </Button>
          
          <Button
            variant="ghost"
            size="md"
            fullWidth
            onClick={handleDeny}
          >
            Deny
          </Button>
          
          <SecurityNotice message="Your photos are only processed securely for valuation purposes." />
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </ScreenContainer>
  );
};

export default GalleryPermissionScreen;



