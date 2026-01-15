'use client'

// Payment Method Screen - Add/manage bank account for payout
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
  SecurityNotice
} from '@/components/ui';

const PaymentMethodScreen: React.FC = () => {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [savedAccounts] = useState([
    { id: 1, bank: 'Maybank', accountNumber: '****8821', isDefault: true },
  ]);

  const banks = [
    { id: 'maybank', name: 'Maybank', icon: 'ðŸ¦' },
    { id: 'cimb', name: 'CIMB Bank', icon: 'ðŸ¦' },
    { id: 'publicbank', name: 'Public Bank', icon: 'ðŸ¦' },
    { id: 'rhb', name: 'RHB Bank', icon: 'ðŸ¦' },
    { id: 'hongkong', name: 'Hong Leong Bank', icon: 'ðŸ¦' },
    { id: 'ambank', name: 'AmBank', icon: 'ðŸ¦' },
    { id: 'bsn', name: 'BSN', icon: 'ðŸ¦' },
    { id: 'other', name: 'Other Bank', icon: 'ðŸ¦' },
  ];

  const isFormValid = selectedBank && accountNumber.length >= 8 && accountName;

  const handleAddAccount = () => {
    if (isFormValid) {
      alert('Bank account added successfully!');
      router.push('/location');
    }
  };

  return (
    <ScreenContainer>
      <Header
        title="Payment Method"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={120}>
        {/* Saved Accounts */}
        {savedAccounts.length > 0 && (
          <div style={{ padding: theme.spacing.md }}>
            <SectionTitle title="Saved Accounts" />
            
            {savedAccounts.map(account => (
              <Card
                key={account.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: theme.spacing.sm,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: withOpacity('#FFC107', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon name="account_balance" size={24} color="#D97706" />
                  </div>
                  <div>
                    <p style={{
                      fontSize: theme.fontSizes.base,
                      fontWeight: theme.fontWeights.bold,
                      color: theme.colors.textPrimary,
                    }}>
                      {account.bank}
                    </p>
                    <p style={{
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.textSecondary,
                    }}>
                      {account.accountNumber}
                    </p>
                  </div>
                </div>
                {account.isDefault && (
                  <span style={{
                    fontSize: theme.fontSizes.xs,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.primary,
                    backgroundColor: withOpacity(theme.colors.primary, 0.1),
                    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                    borderRadius: theme.borderRadius.full,
                  }}>
                    Default
                  </span>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Add New Account */}
        <div style={{ padding: theme.spacing.md, paddingTop: savedAccounts.length > 0 ? 0 : theme.spacing.md }}>
          <SectionTitle 
            title="Add New Account" 
            subtitle="Your payout will be sent to this account"
          />

          {/* Bank Selection */}
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.sm,
          }}>
            Select Bank *
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.lg,
          }}>
            {banks.map(bank => (
              <button
                key={bank.id}
                onClick={() => setSelectedBank(bank.id)}
                style={{
                  padding: theme.spacing.md,
                  backgroundColor: selectedBank === bank.id 
                    ? withOpacity(theme.colors.primary, 0.1) 
                    : theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `2px solid ${selectedBank === bank.id 
                    ? theme.colors.primary 
                    : theme.colors.borderLight}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  transition: `all ${theme.transitions.fast}`,
                }}
              >
                <span style={{ fontSize: 20 }}>{bank.icon}</span>
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: selectedBank === bank.id 
                    ? theme.fontWeights.semibold 
                    : theme.fontWeights.medium,
                  color: selectedBank === bank.id 
                    ? theme.colors.primary 
                    : theme.colors.textPrimary,
                }}>
                  {bank.name}
                </span>
              </button>
            ))}
          </div>

          {/* Account Details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            <Input
              label="Account Number *"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter your account number"
              type="tel"
            />
            <Input
              label="Account Holder Name *"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="As shown on bank statement"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SecurityNotice message="Your bank details are encrypted and stored securely. We only use this for payout purposes." />
        </div>
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
          onClick={handleAddAccount}
          icon="add"
        >
          Add Bank Account
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default PaymentMethodScreen;



