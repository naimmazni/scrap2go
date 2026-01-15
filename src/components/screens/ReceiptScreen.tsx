'use client'

// Receipt Screen - Detailed payment breakdown with email functionality
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
} from '@/components/ui';

const ReceiptScreen: React.FC = () => {
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const receiptData = {
    receiptNumber: 'RCP-2026-001234',
    orderNumber: 'SO-2026-001234',
    date: '15 Jan 2026',
    time: '2:45 PM',
    
    vehicle: {
      plate: 'WXX 1234',
      make: 'Proton',
      model: 'Saga 1.3',
      year: '2010',
      condition: 'Fair',
    },
    
    owner: {
      name: 'Ahmad bin Ali',
      ic: '****1234',
      email: 'ahmad@example.com',
      phone: '+60 12-345 6789',
    },
    
    payment: {
      baseValue: 850.00,
      serviceCharge: 0,
      discount: 50.00,
      discountReason: 'First-time user discount',
      total: 850.00,
      method: 'Bank Transfer',
      bank: 'Maybank',
      accountNumber: '****8821',
      transactionId: 'TXN2026001234567',
    },
  };

  const handleEmailReceipt = () => {
    setEmailSent(true);
    // TODO: Implement actual email sending
    console.log('Sending receipt to:', receiptData.owner.email);
    
    setTimeout(() => {
      alert(`Receipt sent to ${receiptData.owner.email}`);
    }, 1000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // TODO: Implement PDF generation and download
    console.log('Downloading receipt...');
    
    setTimeout(() => {
      setIsDownloading(false);
      alert('Receipt downloaded successfully!');
    }, 1500);
  };

  return (
    <ScreenContainer>
      <ScrollableContent bottomPadding={140}>
        {/* Header */}
        <div style={{
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.md,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.md,
        }}>
          <button
            onClick={() => router.push('/home')}
            style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadius.full,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.surfaceLight,
              border: `1px solid ${theme.colors.borderLight}`,
            }}
          >
            <Icon name="close" size={24} color={theme.colors.textPrimary} />
          </button>
          <div>
            <h1 style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
            }}>
              Payment Receipt
            </h1>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              Order #{receiptData.orderNumber}
            </p>
          </div>
        </div>

        {/* Success Icon */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.lg,
          paddingTop: 0,
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.success, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.md,
          }}>
            <Icon name="check_circle" size={48} color={theme.colors.success} filled />
          </div>
          <h2 style={{
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.xs,
          }}>
            Payment Received
          </h2>
          <p style={{
            fontSize: theme.fontSizes.base,
            color: theme.colors.textSecondary,
            textAlign: 'center',
          }}>
            {receiptData.date} at {receiptData.time}
          </p>
        </div>

        {/* Total Amount Card */}
        <div style={{ padding: `0 ${theme.spacing.lg}`, marginBottom: theme.spacing.lg }}>
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
              Total Paid
            </p>
            <p style={{
              fontSize: 48,
              fontWeight: theme.fontWeights.bold,
              color: '#fff',
              lineHeight: 1,
              marginBottom: theme.spacing.sm,
            }}>
              RM {receiptData.payment.total.toFixed(2)}
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.xs,
            }}>
              <Icon name="check_circle" size={16} color="#fff" filled />
              <span style={{
                fontSize: theme.fontSizes.sm,
                color: '#fff',
              }}>
                Transaction Complete
              </span>
            </div>
          </Card>
        </div>

        {/* Receipt Details */}
        <div style={{ padding: theme.spacing.lg, paddingTop: 0 }}>
          {/* Receipt Info */}
          <Card style={{ marginBottom: theme.spacing.md }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: theme.spacing.xs,
            }}>
              <span style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}>
                Receipt No.
              </span>
              <span style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
              }}>
                {receiptData.receiptNumber}
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <span style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}>
                Transaction ID
              </span>
              <span style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
              }}>
                {receiptData.payment.transactionId}
              </span>
            </div>
          </Card>

          {/* Vehicle Details */}
          <h3 style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            marginBottom: theme.spacing.sm,
          }}>
            Vehicle Details
          </h3>
          <Card style={{ marginBottom: theme.spacing.lg }}>
            <div style={{
              display: 'grid',
              gap: theme.spacing.sm,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Registration
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.vehicle.plate}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Make & Model
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.vehicle.make} {receiptData.vehicle.model}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Year
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.vehicle.year}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Condition
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.vehicle.condition}
                </span>
              </div>
            </div>
          </Card>

          {/* Payment Breakdown */}
          <h3 style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            marginBottom: theme.spacing.sm,
          }}>
            Payment Breakdown
          </h3>
          <Card style={{ marginBottom: theme.spacing.lg }}>
            <div style={{
              display: 'grid',
              gap: theme.spacing.sm,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Base Scrap Value
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  RM {receiptData.payment.baseValue.toFixed(2)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Service Charge
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  RM {receiptData.payment.serviceCharge.toFixed(2)}
                </span>
              </div>
              {receiptData.payment.discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.success }}>
                      Discount
                    </span>
                    <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textSecondary }}>
                      {receiptData.payment.discountReason}
                    </p>
                  </div>
                  <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold, color: theme.colors.success }}>
                    -RM {receiptData.payment.discount.toFixed(2)}
                  </span>
                </div>
              )}
              <div style={{
                height: 1,
                backgroundColor: theme.colors.borderLight,
                margin: `${theme.spacing.xs} 0`,
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.base, fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary }}>
                  Total
                </span>
                <span style={{ fontSize: theme.fontSizes.lg, fontWeight: theme.fontWeights.bold, color: theme.colors.primary }}>
                  RM {receiptData.payment.total.toFixed(2)}
                </span>
              </div>
            </div>
          </Card>

          {/* Payment Method */}
          <h3 style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            marginBottom: theme.spacing.sm,
          }}>
            Payment Method
          </h3>
          <Card style={{ marginBottom: theme.spacing.lg }}>
            <div style={{
              display: 'grid',
              gap: theme.spacing.sm,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Method
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.payment.method}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Bank
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.payment.bank}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Account
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.payment.accountNumber}
                </span>
              </div>
            </div>
          </Card>

          {/* Customer Info */}
          <h3 style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            marginBottom: theme.spacing.sm,
          }}>
            Customer Information
          </h3>
          <Card style={{ marginBottom: theme.spacing.lg }}>
            <div style={{
              display: 'grid',
              gap: theme.spacing.sm,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Name
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.owner.name}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  IC Number
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.owner.ic}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Email
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.owner.email}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                  Phone
                </span>
                <span style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.semibold }}>
                  {receiptData.owner.phone}
                </span>
              </div>
            </div>
          </Card>

          {/* Email Confirmation */}
          {emailSent && (
            <Card style={{
              backgroundColor: withOpacity(theme.colors.success, 0.1),
              border: `1px solid ${withOpacity(theme.colors.success, 0.3)}`,
            }}>
              <div style={{ display: 'flex', gap: theme.spacing.sm, alignItems: 'center' }}>
                <Icon name="mark_email_read" size={20} color={theme.colors.success} />
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.success,
                  fontWeight: theme.fontWeights.semibold,
                }}>
                  Receipt sent to {receiptData.owner.email}
                </p>
              </div>
            </Card>
          )}

          {/* Footer Note */}
          <div style={{
            marginTop: theme.spacing.lg,
            padding: theme.spacing.md,
            backgroundColor: withOpacity(theme.colors.gray100, 0.5),
            borderRadius: theme.borderRadius.lg,
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: theme.fontSizes.xs,
              color: theme.colors.textSecondary,
              lineHeight: 1.5,
            }}>
              This is an official receipt from Scrap2Go. For inquiries, contact support@scrap2go.com or call 1-800-SCRAP-GO
            </p>
          </div>
        </div>
      </ScrollableContent>

      <FixedBottomContainer style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: theme.spacing.sm }}>
          <Button
            variant="outline"
            icon={isDownloading ? 'downloading' : 'download'}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? 'Downloading...' : 'Download'}
          </Button>
          <Button
            variant="outline"
            icon={emailSent ? 'mark_email_read' : 'email'}
            onClick={handleEmailReceipt}
            disabled={emailSent}
          >
            {emailSent ? 'Sent' : 'Email'}
          </Button>
        </div>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => router.push('/home')}
        >
          Back to Home
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default ReceiptScreen;
