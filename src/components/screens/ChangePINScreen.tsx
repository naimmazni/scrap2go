'use client'

// Change PIN Screen - App PIN management
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  Header,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
  WarningBox
} from '@/components/ui';

const ChangePINScreen: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState('current'); // current, new, confirm
  const [pins, setPins] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [error, setError] = useState('');

  const PIN_LENGTH = 6;

  const handleNumberPress = (num) => {
    setError('');
    const currentPin = pins[step];
    
    if (currentPin.length < PIN_LENGTH) {
      setPins({
        ...pins,
        [step]: currentPin + num,
      });

      // Auto-advance to next step when PIN is complete
      if (currentPin.length + 1 === PIN_LENGTH) {
        setTimeout(() => {
          if (step === 'current') {
            // Verify current PIN (in real app, check against stored PIN)
            if ((currentPin + num) === '123456') {
              setStep('new');
              } else {
              setError('Incorrect PIN. Please try again.');
              setPins({ ...pins, current: '' });
            }
          } else if (step === 'new') {
            setStep('confirm');
          } else if (step === 'confirm') {
            // Check if PINs match
            if (pins.new === (currentPin + num)) {
              alert('PIN changed successfully!');
              router.back();
            } else {
              setError('PINs do not match. Please try again.');
              setPins({ ...pins, new: '', confirm: '' });
              setStep('new');
            }
          }
        }, 100);
      }
    }
  };

  const handleBackspace = () => {
    setError('');
    setPins({
      ...pins,
      [step]: pins[step].slice(0, -1),
    });
  };

  const getTitle = () => {
    switch (step) {
      case 'current': return 'Enter Current PIN';
      case 'new': return 'Enter New PIN';
      case 'confirm': return 'Confirm New PIN';
      default: return '';
    }
  };

  const currentPin = pins[step];

  return (
    <ScreenContainer>
      <Header
        title="Change PIN"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={20}>
        {/* Info Card */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="pin" size={20} color={theme.colors.primary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Quick Access PIN
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Your 6-digit PIN provides quick and secure access to your account.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* PIN Input Display */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.xl,
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.lg,
          }}>
            <Icon name="lock" size={40} color={theme.colors.primary} />
          </div>

          <h2 style={{
            fontSize: theme.fontSizes.xl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            {getTitle()}
          </h2>

          {/* PIN Dots */}
          <div style={{
            display: 'flex',
            gap: theme.spacing.md,
            marginBottom: theme.spacing.xl,
          }}>
            {[...Array(PIN_LENGTH)].map((_, index) => (
              <div
                key={index}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: theme.borderRadius.full,
                  backgroundColor: index < currentPin.length
                    ? theme.colors.primary
                    : theme.colors.gray300,
                  transition: `background-color ${theme.transitions.fast}`,
                }}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div style={{ marginBottom: theme.spacing.md, maxWidth: 280 }}>
              <WarningBox variant="error" message={error} />
            </div>
          )}

          {/* Number Pad */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: theme.spacing.md,
            maxWidth: 300,
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberPress(num.toString())}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: theme.borderRadius.full,
                  backgroundColor: theme.colors.surfaceLight,
                  border: `1px solid ${theme.colors.borderLight}`,
                  fontSize: theme.fontSizes['2xl'],
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  cursor: 'pointer',
                  transition: `all ${theme.transitions.fast}`,
                }}
              >
                {num}
              </button>
            ))}
            
            {/* Empty space */}
            <div />
            
            {/* Zero */}
            <button
              onClick={() => handleNumberPress('0')}
              style={{
                width: 72,
                height: 72,
                borderRadius: theme.borderRadius.full,
                backgroundColor: theme.colors.surfaceLight,
                border: `1px solid ${theme.colors.borderLight}`,
                fontSize: theme.fontSizes['2xl'],
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                cursor: 'pointer',
                transition: `all ${theme.transitions.fast}`,
              }}
            >
              0
            </button>
            
            {/* Backspace */}
            <button
              onClick={handleBackspace}
              disabled={currentPin.length === 0}
              style={{
                width: 72,
                height: 72,
                borderRadius: theme.borderRadius.full,
                backgroundColor: theme.colors.surfaceLight,
                border: `1px solid ${theme.colors.borderLight}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: currentPin.length === 0 ? 0.5 : 1,
              }}
            >
              <Icon name="backspace" size={28} color={theme.colors.textPrimary} />
            </button>
          </div>

          {/* Forgot PIN Link */}
          {step === 'current' && (
            <button
              onClick={() => alert('Password reset link sent to your email')}
              style={{
                marginTop: theme.spacing.lg,
                padding: theme.spacing.sm,
                backgroundColor: 'transparent',
                color: theme.colors.primary,
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.medium,
              }}
            >
              Forgot PIN?
            </button>
          )}
        </div>

        {/* Security Notice */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{ backgroundColor: theme.colors.gray50 }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="info" size={18} color={theme.colors.textSecondary} />
              <p style={{
                fontSize: theme.fontSizes.xs,
                color: theme.colors.textSecondary,
                lineHeight: 1.5,
              }}>
                Your PIN is stored securely and encrypted. Never share your PIN with anyone.
              </p>
            </div>
          </Card>
        </div>
      </ScrollableContent>
    </ScreenContainer>
  );
};

export default ChangePINScreen;



