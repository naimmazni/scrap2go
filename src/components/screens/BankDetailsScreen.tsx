'use client'

// Bank Details Screen - Add/edit bank account info (alias for PaymentMethodScreen)
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  Header, 
  Input,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
  SectionTitle,
  ListItem,
  SecurityNotice
} from '@/components/ui';

const BankDetailsScreen: React.FC = () => {
  const router = useRouter();
  const [accounts] = useState([
    { 
      id: 1, 
      bank: 'Maybank', 
      accountNumber: '****8821',
      accountName: 'Ali Bin Abu',
      isDefault: true,
      addedDate: '15 Sep 2024',
    },
  ]);

  const handleAddAccount = () => {
    router.push('/payment-method');
  };

  const handleEditAccount = (accountId) => {
    alert(`Edit account ${accountId}`);
  };

  const handleSetDefault = (accountId) => {
    alert(`Set account ${accountId} as default`);
  };

  const handleDeleteAccount = (accountId) => {
    if (confirm('Are you sure you want to remove this bank account?')) {
      alert(`Account ${accountId} removed`);
    }
  };

  return (
    <ScreenContainer>
      <Header
        title="Bank Details"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={120}>
        {/* Info Banner */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="account_balance" size={20} color={theme.colors.primary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Secure Payouts
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Your scrap value will be transferred directly to your chosen bank account within 1-3 business days.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Saved Bank Accounts */}
        {accounts.length > 0 && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <SectionTitle title="Your Bank Accounts" />
            
            {accounts.map(account => (
              <Card
                key={account.id}
                padding="none"
                style={{ marginBottom: theme.spacing.md }}
              >
                {/* Account Info Header */}
                <div style={{
                  padding: theme.spacing.md,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.md,
                  borderBottom: `1px solid ${theme.colors.borderLight}`,
                }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: withOpacity('#FFC107', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon name="account_balance" size={28} color="#D97706" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                      <p style={{
                        fontSize: theme.fontSizes.lg,
                        fontWeight: theme.fontWeights.bold,
                        color: theme.colors.textPrimary,
                      }}>
                        {account.bank}
                      </p>
                      {account.isDefault && (
                        <span style={{
                          fontSize: theme.fontSizes.xs,
                          fontWeight: theme.fontWeights.semibold,
                          color: theme.colors.primary,
                          backgroundColor: withOpacity(theme.colors.primary, 0.1),
                          padding: `2px ${theme.spacing.xs}`,
                          borderRadius: theme.borderRadius.sm,
                        }}>
                          Default
                        </span>
                      )}
                    </div>
                    <p style={{
                      fontSize: theme.fontSizes.base,
                      color: theme.colors.textSecondary,
                      fontFamily: 'monospace',
                      marginTop: 2,
                    }}>
                      {account.accountNumber}
                    </p>
                    <p style={{
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.textPrimary,
                      marginTop: 4,
                    }}>
                      {account.accountName}
                    </p>
                  </div>
                </div>

                {/* Account Actions */}
                <div>
                  <ListItem
                    icon="edit"
                    label="Edit Account"
                    onClick={() => handleEditAccount(account.id)}
                    showBorder
                  />
                  {!account.isDefault && (
                    <ListItem
                      icon="star"
                      label="Set as Default"
                      onClick={() => handleSetDefault(account.id)}
                      showBorder
                    />
                  )}
                  <ListItem
                    icon="delete"
                    label="Remove Account"
                    onClick={() => handleDeleteAccount(account.id)}
                  />
                </div>

                {/* Account Metadata */}
                <div style={{
                  padding: theme.spacing.sm,
                  backgroundColor: theme.colors.gray50,
                  borderTop: `1px solid ${theme.colors.borderLight}`,
                }}>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                    textAlign: 'center',
                  }}>
                    Added on {account.addedDate}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {accounts.length === 0 && (
          <div style={{ padding: theme.spacing.xl }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <Icon name="account_balance" size={64} color={theme.colors.textMuted} />
              <p style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginTop: theme.spacing.md,
              }}>
                No Bank Accounts
              </p>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                marginTop: theme.spacing.xs,
              }}>
                Add a bank account to receive payouts
              </p>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SecurityNotice message="Your bank details are encrypted and stored securely. We only use this information for payout purposes." />
        </div>

        {/* Supported Banks */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SectionTitle 
            title="Supported Banks" 
            subtitle="We support all major Malaysian banks"
          />
          <Card style={{ backgroundColor: theme.colors.gray50 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: theme.spacing.sm,
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              {['Maybank', 'CIMB Bank', 'Public Bank', 'RHB Bank', 
                'Hong Leong Bank', 'AmBank', 'BSN', 'Bank Islam'].map((bank, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                  <Icon name="check" size={14} color={theme.colors.primary} />
                  <span>{bank}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleAddAccount}
          icon="add"
        >
          Add Bank Account
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default BankDetailsScreen;



