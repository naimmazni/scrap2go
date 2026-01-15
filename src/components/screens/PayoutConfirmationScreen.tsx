'use client'

// Payout Confirmation Screen - Show payment received confirmation
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
  SuccessIcon
} from '@/components/ui';

const PayoutConfirmationScreen: React.FC = () => {
  const router = useRouter();

  const payoutDetails = {
    amount: 'RM 4,500',
    bank: 'Maybank',
    accountNumber: '****8821',
    referenceNumber: 'PAY-2024-001234',
    date: '24 Oct 2024',
    time: '2:30 PM',
    vehiclePlate: 'WXX 1234',
  };

  return (
    <ScreenContainer>
      {/* Success Header */}
      <ScrollableContent bottomPadding={140}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.xl,
          paddingTop: 60,
        }}>
          <SuccessIcon size={80} />
          
          <h1 style={{
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.xs,
          }}>
            Payment Received!
          </h1>
          <p style={{
            fontSize: theme.fontSizes.base,
            color: theme.colors.textSecondary,
            textAlign: 'center',
          }}>
            Your payout has been successfully transferred
          </p>
        </div>

        {/* Amount Card */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
            padding: theme.spacing.xl,
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: withOpacity('#fff', 0.8),
              marginBottom: theme.spacing.xs,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Total Payout
            </p>
            <p style={{
              fontSize: 48,
              fontWeight: theme.fontWeights.bold,
              color: '#fff',
              lineHeight: 1,
            }}>
              {payoutDetails.amount}
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.xs,
              marginTop: theme.spacing.md,
            }}>
              <Icon name="check_circle" size={16} color="#fff" filled />
              <span style={{
                fontSize: theme.fontSizes.sm,
                color: '#fff',
              }}>
                Transferred to your bank account
              </span>
            </div>
          </Card>
        </div>

        {/* Transaction Details */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
              marginBottom: theme.spacing.md,
            }}>
              Transaction Details
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.md,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Reference Number
                </span>
                <span style={{ 
                  fontWeight: theme.fontWeights.semibold, 
                  fontSize: theme.fontSizes.sm,
                  fontFamily: 'monospace',
                }}>
                  {payoutDetails.referenceNumber}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Vehicle Plate
                </span>
                <span style={{ fontWeight: theme.fontWeights.semibold, fontSize: theme.fontSizes.sm }}>
                  {payoutDetails.vehiclePlate}
                </span>
              </div>

              <div style={{ 
                height: 1, 
                backgroundColor: theme.colors.borderLight,
                margin: `${theme.spacing.xs} 0`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Bank
                </span>
                <span style={{ fontWeight: theme.fontWeights.semibold, fontSize: theme.fontSizes.sm }}>
                  {payoutDetails.bank}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Account Number
                </span>
                <span style={{ fontWeight: theme.fontWeights.semibold, fontSize: theme.fontSizes.sm }}>
                  {payoutDetails.accountNumber}
                </span>
              </div>

              <div style={{ 
                height: 1, 
                backgroundColor: theme.colors.borderLight,
                margin: `${theme.spacing.xs} 0`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Date & Time
                </span>
                <span style={{ fontWeight: theme.fontWeights.semibold, fontSize: theme.fontSizes.sm }}>
                  {payoutDetails.date}, {payoutDetails.time}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Info Card */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="info" size={20} color={theme.colors.primary} />
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.5,
              }}>
                Please allow 1-3 business days for the amount to reflect in your bank account.
              </p>
            </div>
          </Card>
        </div>
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => router.push('/rating')}
          iconRight="arrow_forward"
        >
          Rate Your Experience
        </Button>
        <button
          onClick={() => router.push('/home')}
          style={{
            width: '100%',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            color: theme.colors.textSecondary,
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            borderRadius: theme.borderRadius.lg,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Back to Home
        </button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default PayoutConfirmationScreen;



