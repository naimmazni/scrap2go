'use client'

// OTP Verification Screen
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Header } from '@/components/ui';

const OTPScreen: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(59);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.every(digit => digit)) {
      router.push('/onboarding');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: theme.colors.surfaceLight,
      paddingTop: 54,
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surfaceLight,
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <button
          onClick={() => router.back()}
          style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="arrow_back" size={24} />
        </button>
        <h2 style={{
          flex: 1,
          textAlign: 'center',
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeights.bold,
          paddingRight: 48,
        }}>
          Verification
        </h2>
      </div>

      {/* Logo Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
      }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: theme.borderRadius.xl,
          backgroundColor: withOpacity(theme.colors.primary, 0.1),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: theme.spacing.sm,
        }}>
          <Icon name="directions_car" size={32} color={theme.colors.primary} />
        </div>
        <h1 style={{
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.bold,
          color: theme.colors.primary,
        }}>
          Scrap2Go
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: `0 ${theme.spacing.lg}` }}>
        <h2 style={{
          fontSize: 28,
          fontWeight: theme.fontWeights.bold,
          textAlign: 'center',
          marginBottom: theme.spacing.sm,
        }}>
          Enter Code
        </h2>
        <p style={{
          color: theme.colors.textSecondary,
          textAlign: 'center',
          lineHeight: 1.5,
        }}>
          Enter the 6-digit code sent to <br />
          <span style={{ color: theme.colors.textPrimary, fontWeight: theme.fontWeights.bold }}>
            +60 12-345 6789
          </span>
        </p>
      </div>

      {/* OTP Input */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        padding: theme.spacing.xl,
      }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            placeholder="-"
            style={{
              width: 48,
              height: 56,
              borderRadius: theme.borderRadius.lg,
              border: `1px solid ${digit ? theme.colors.primary : theme.colors.borderLight}`,
              backgroundColor: theme.colors.surfaceLight,
              fontSize: theme.fontSizes['2xl'],
              fontWeight: theme.fontWeights.bold,
              textAlign: 'center',
              outline: 'none',
              transition: `border-color ${theme.transitions.fast}`,
              boxShadow: theme.shadows.sm,
            }}
          />
        ))}
      </div>

      {/* Resend Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.xl,
        padding: `0 ${theme.spacing.lg}`,
      }}>
        <p style={{
          fontSize: theme.fontSizes.sm,
          color: theme.colors.textSecondary,
        }}>
          Didn't receive code?
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
          <button
            disabled={countdown > 0}
            style={{
              padding: '8px 12px',
              borderRadius: theme.borderRadius.lg,
              color: countdown > 0 ? theme.colors.textMuted : theme.colors.primary,
              fontWeight: theme.fontWeights.bold,
              fontSize: theme.fontSizes.sm,
            }}
          >
            Resend Code
          </button>
          <span style={{
            padding: '8px 12px',
            borderRadius: theme.borderRadius.lg,
            backgroundColor: theme.colors.gray100,
            color: theme.colors.textMuted,
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.medium,
            minWidth: 80,
            textAlign: 'center',
          }}>
            in 0:{countdown.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Verify Button */}
      <div style={{
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xl,
        backgroundColor: theme.colors.surfaceLight,
      }}>
        <Button
          fullWidth
          size="lg"
          onClick={handleVerify}
          disabled={!otp.every(digit => digit)}
        >
          Verify
        </Button>
        <p style={{
          textAlign: 'center',
          fontSize: theme.fontSizes.xs,
          color: theme.colors.textMuted,
          marginTop: theme.spacing.md,
        }}>
          By verifying, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
};

export default OTPScreen;



