'use client'

// Bank Details Screen - Payout Setup Form
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer, PageHeader } from '@/components/ui';

const BankDetailsScreen: React.FC = () => {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState('');
  const [showBankDropdown, setShowBankDropdown] = useState(false);

  const banks = [
    'Maybank',
    'CIMB Bank',
    'Public Bank',
    'Hong Leong Bank',
    'RHB Bank',
    'AmBank',
  ];

  const handleContinue = () => {
    if (selectedBank && accountNumber) {
      router.push('/identity-verification');
    }
  };

  return (
    <PageContainer>
      <PageHeader
        title="Payout Setup"
        showBack
        onBack={() => router.push('/vehicle-details')}
      />

      {/* Main Content */}
      <main style={{
        flex: 1,
        overflowY: 'auto',
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.xl,
      }}>
        {/* Main Question Section */}
        <div>
          <h2 style={{
            fontSize: 28,
            fontWeight: 800,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
            lineHeight: 1.2,
          }}>
            Where should we send your{' '}
            <span style={{ color: theme.colors.primary }}>RM 1,200</span>?
          </h2>
          <p style={{
            fontSize: theme.fontSizes.base,
            color: theme.colors.textSecondary,
            lineHeight: 1.6,
          }}>
            Enter your bank details to receive instant payment upon vehicle handover.
          </p>
        </div>

        {/* Form Fields */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.lg,
        }}>
          {/* Receiving Bank */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              marginBottom: theme.spacing.sm,
              paddingLeft: theme.spacing.xs,
            }}>
              RECEIVING BANK
            </label>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowBankDropdown(!showBankDropdown)}
                style={{
                  width: '100%',
                  padding: `${theme.spacing.md} ${theme.spacing.md}`,
                  border: 'none',
                  borderRadius: theme.borderRadius['2xl'],
                  backgroundColor: theme.colors.white,
                  boxShadow: theme.shadows.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  cursor: 'pointer',
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.medium,
                  color: selectedBank ? theme.colors.textPrimary : theme.colors.textSecondary,
                }}
              >
                <Icon name="account_balance" size={20} color={theme.colors.primary} />
                <span style={{ flex: 1, textAlign: 'left' }}>
                  {selectedBank || 'Select your bank'}
                </span>
                <Icon name="unfold_more" size={20} color={theme.colors.textSecondary} />
              </button>

              {/* Dropdown Menu */}
              {showBankDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: theme.colors.white,
                  border: `1px solid ${theme.colors.borderLight}`,
                  borderRadius: theme.borderRadius['2xl'],
                  marginTop: theme.spacing.xs,
                  zIndex: 100,
                  maxHeight: 300,
                  overflowY: 'auto',
                  boxShadow: theme.shadows.lg,
                }}>
                  {banks.map((bank, index) => (
                    <button
                      key={bank}
                      onClick={() => {
                        setSelectedBank(bank);
                        setShowBankDropdown(false);
                      }}
                      style={{
                        width: '100%',
                        padding: `${theme.spacing.md} ${theme.spacing.md}`,
                        border: 'none',
                        backgroundColor: selectedBank === bank ? withOpacity(theme.colors.primary, 0.05) : 'transparent',
                        borderBottom: index < banks.length - 1 ? `1px solid ${theme.colors.borderLight}` : 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: theme.fontSizes.base,
                        fontWeight: theme.fontWeights.medium,
                        color: selectedBank === bank ? theme.colors.primary : theme.colors.textPrimary,
                      }}
                    >
                      {bank}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Account Number */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              marginBottom: theme.spacing.sm,
              paddingLeft: theme.spacing.xs,
            }}>
              ACCOUNT NUMBER
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: `${theme.spacing.md} ${theme.spacing.md}`,
              borderRadius: theme.borderRadius['2xl'],
              backgroundColor: theme.colors.white,
              boxShadow: theme.shadows.sm,
              gap: theme.spacing.sm,
            }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: theme.borderRadius.lg,
                backgroundColor: theme.colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: theme.fontSizes.xs,
                fontWeight: theme.fontWeights.bold,
                flexShrink: 0,
              }}>
                123
              </div>
              <input
                type="text"
                placeholder="0000 0000 0000"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.medium,
                  color: accountNumber ? theme.colors.textPrimary : theme.colors.textMuted,
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Account Holder Name */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              marginBottom: theme.spacing.sm,
              paddingLeft: theme.spacing.xs,
            }}>
              ACCOUNT HOLDER NAME
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: `${theme.spacing.md} ${theme.spacing.md}`,
              borderRadius: theme.borderRadius['2xl'],
              backgroundColor: theme.colors.gray100,
              gap: theme.spacing.sm,
            }}>
              <Icon name="person" size={20} color={theme.colors.textSecondary} />
              <span style={{
                flex: 1,
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textSecondary,
                letterSpacing: 0.5,
              }}>
                AHMAD BIN MUSTAFA
              </span>
              <Icon name="verified" size={20} color={theme.colors.success} />
            </div>
            <p style={{
              fontSize: theme.fontSizes.xs,
              color: theme.colors.textSecondary,
              marginTop: theme.spacing.sm,
              paddingLeft: theme.spacing.xs,
            }}>
              Name auto-filled from your registered profile.
            </p>
          </div>

          {/* Secure Connection */}
          <div style={{
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius.xl,
            backgroundColor: withOpacity(theme.colors.gray100, 0.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.sm,
          }}>
            <Icon name="lock" size={24} color={theme.colors.primary} />
            <span style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              SECURE CONNECTION
            </span>
          </div>
        </div>
      </main>

      {/* Footer with Button */}
      <footer style={{
        padding: `${theme.spacing.lg} ${theme.spacing.xl} ${theme.spacing.xl}`,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}>
        <Button
          fullWidth
          size="lg"
          onClick={handleContinue}
          disabled={!selectedBank || !accountNumber}
          style={{
            borderRadius: theme.borderRadius['2xl'],
            fontSize: theme.fontSizes.base,
            fontWeight: theme.fontWeights.bold,
            height: 56,
          }}
        >
          Save & Schedule Pickup
        </Button>

        {/* Pagination Dots */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              style={{
                width: index === 0 ? 24 : 6,
                height: 6,
                borderRadius: theme.borderRadius.full,
                backgroundColor: index === 0 ? theme.colors.primary : theme.colors.gray300,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </footer>
    </PageContainer>
  );
};

export default BankDetailsScreen;



