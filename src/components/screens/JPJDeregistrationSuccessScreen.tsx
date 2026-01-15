'use client';

// JPJ Processing Status Screen
// Replaces the placeholder wait screen with detailed JPJ sync status
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer } from '@/components/ui';

const JPJDeregistrationSuccessScreen: React.FC = () => {
  const router = useRouter();

  const steps = [
    {
       title: 'Vehicle ID Verification',
       status: 'completed',
       description: 'Completed',
    },
    {
       title: 'Owner Biometric Match',
       status: 'completed',
       description: 'Completed',
    },
    {
       title: 'Batal Hak Milik Approval',
       status: 'in-progress',
       description: 'In Progress...',
    },
    {
       title: 'Generate Sijil Pelupusan',
       status: 'pending',
       description: 'Pending',
    },
  ];

  return (
    <PageContainer>
       {/* Header */}
       <header style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
         backgroundColor: 'transparent',
       }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
            <button 
              onClick={() => router.back()}
              style={{ padding: 0, border: 'none', background: 'none' }}
            >
              <Icon name="chevron_left" size={24} color={theme.colors.textPrimary} />
            </button>
            <span style={{ 
               fontSize: theme.fontSizes.xl, 
               fontWeight: theme.fontWeights.bold,
               color: theme.colors.textPrimary,
            }}>
               Legal Deregistration
            </span>
         </div>
         <div style={{
            height: 40,
            width: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.borderRadius.lg,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            color: theme.colors.primary,
         }}>
            <Icon name="gavel" size={24} />
         </div>
       </header>

       <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: `0 ${theme.spacing.xl}`,
          width: '100%',
          maxWidth: 448, // max-w-md
          margin: '0 auto',
       }}>
          {/* Main Status Animation */}
          <div style={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             marginTop: theme.spacing.md,
             marginBottom: 40,
          }}>
             <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 128,
                height: 128,
                marginBottom: 24,
             }}>
                {/* Outer Pulse */}
                <div style={{
                   position: 'absolute',
                   inset: 0,
                   borderRadius: theme.borderRadius.full,
                   backgroundColor: withOpacity(theme.colors.primary, 0.2),
                   animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }} />
                {/* Rotating Border */}
                <div style={{
                   position: 'absolute',
                   inset: 8,
                   borderRadius: theme.borderRadius.full,
                   border: `2px dashed ${withOpacity(theme.colors.primary, 0.3)}`,
                   animation: 'spin 10s linear infinite',
                }} />
                {/* Inner Circle */}
                <div style={{
                   position: 'relative',
                   zIndex: 10,
                   height: 80,
                   width: 80,
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   borderRadius: theme.borderRadius.full,
                   backgroundColor: theme.colors.primary,
                   color: '#fff',
                   boxShadow: `0 20px 25px -5px ${withOpacity(theme.colors.primary, 0.4)}`,
                }}>
                   <Icon name="verified_user" size={40} color="#fff" filled />
                </div>
             </div>
             
             <h2 style={{
                fontSize: theme.fontSizes.xl,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                marginBottom: 4,
             }}>
                Syncing with JPJ Database...
             </h2>
             <p style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.medium,
                color: theme.colors.textSecondary,
             }}>
                Transaction ID: S2G-99210-JPJ
             </p>
          </div>

          {/* Timeline */}
          <div style={{
             width: '100%',
             position: 'relative',
             marginBottom: 32,
          }}>
             {/* Vertical Line */}
             <div style={{
                position: 'absolute',
                left: 19,
                top: 24,
                bottom: 24,
                width: 2,
                backgroundColor: theme.colors.gray200,
             }} />

             {steps.map((step, index) => {
                const isCompleted = step.status === 'completed';
                const isInProgress = step.status === 'in-progress';
                const isPending = step.status === 'pending';

                return (
                   <div key={index} style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      paddingBottom: index === steps.length - 1 ? 0 : 32,
                   }}>
                      <div style={{
                         position: 'relative',
                         zIndex: 10,
                         flexShrink: 0,
                         height: 40,
                         width: 40,
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: theme.borderRadius.full,
                         backgroundColor: isCompleted ? theme.colors.success : (isInProgress ? theme.colors.primary : theme.colors.gray200),
                         color: isPending ? theme.colors.gray400 : '#fff',
                         boxShadow: isCompleted || isInProgress ? theme.shadows.sm : 'none',
                         animation: isInProgress ? 'pulse 2s infinite' : 'none',
                      }}>
                         {isInProgress ? (
                           <Icon name="sync" size={20} style={{ animation: 'spin 1.5s linear infinite' }} />
                         ) : isPending ? (
                           <Icon name="description" size={20} />
                         ) : (
                           <Icon name="check" size={20} />
                         )}
                      </div>
                      <div style={{ paddingTop: 8 }}>
                         <h3 style={{
                            fontWeight: theme.fontWeights.bold,
                            color: isInProgress ? theme.colors.primary : (isPending ? theme.colors.textMuted : theme.colors.textPrimary),
                         }}>
                            {step.title}
                         </h3>
                         <p style={{
                            fontSize: theme.fontSizes.xs,
                            fontWeight: theme.fontWeights.medium,
                            color: isInProgress ? theme.colors.primary : (isPending ? theme.colors.textMuted : theme.colors.success),
                         }}>
                            {step.description}
                         </p>
                      </div>
                   </div>
                );
             })}
          </div>

          {/* Info Box */}
          <div style={{
             width: '100%',
             borderRadius: theme.borderRadius.xl,
             backgroundColor: withOpacity(theme.colors.primary, 0.05), // blue-50
             padding: 16,
             border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
             <div style={{ display: 'flex', gap: 12 }}>
                <Icon name="info" size={20} color={theme.colors.primary} />
                <p style={{
                   fontSize: theme.fontSizes.sm,
                   fontWeight: theme.fontWeights.medium,
                   lineHeight: 1.6,
                   color: withOpacity(theme.colors.textPrimary, 0.8),
                }}>
                   This process usually takes 2-4 hours. You will receive a notification once the Digital Certificate is ready.
                </p>
             </div>
          </div>
       </main>

       {/* Footer */}
       <footer style={{
          width: '100%',
          maxWidth: 448,
          margin: '0 auto',
          padding: `16px ${theme.spacing.xl} 40px`,
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
       }}>
          <Button
             fullWidth
             size="lg"
             onClick={() => router.push('/location')}
             style={{
                height: 56,
                borderRadius: theme.borderRadius.xl,
                boxShadow: `0 10px 15px -3px ${withOpacity(theme.colors.primary, 0.25)}`,
             }}
          >
             Schedule Pickup
          </Button>

          <Button
            variant="outline"
            fullWidth
            onClick={() => router.push('/home')}
            style={{
              height: 56,
              borderRadius: theme.borderRadius.xl,
              border: 'none',
              color: theme.colors.textSecondary,
            }}
           >
            Back to Dashboard
          </Button>
       </footer>

        {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </PageContainer>
  );
};

export default JPJDeregistrationSuccessScreen;
