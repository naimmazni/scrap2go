'use client'

// Change Password Screen - Password management
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  PageHeader,
  Input,
  PageContainer,
  ContentArea,
  WarningBox
} from '@/components/ui';

const ChangePasswordScreen: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
    };
  };

  const passwordStrength = validatePassword(formData.newPassword);

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (!passwordStrength.isValid) {
      newErrors.newPassword = 'Password does not meet requirements';
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Password changed successfully!');
    router.back();
  };

  const isFormValid = formData.currentPassword && 
                      formData.newPassword && 
                      formData.confirmPassword && 
                      passwordStrength.isValid &&
                      formData.newPassword === formData.confirmPassword;

  return (
    <PageContainer>
      <PageHeader
        title="Change Password"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea>
        {/* Info Card */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="lock" size={20} color={theme.colors.primary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Secure Your Account
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Choose a strong password to protect your account and personal information.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Password Form */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            {/* Current Password */}
            <div>
              <Input
                label="Current Password"
                type={showPassword.current ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                placeholder="Enter current password"
              />
              <button
                onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}
                style={{
                  marginTop: theme.spacing.xs,
                  padding: theme.spacing.xs,
                  backgroundColor: 'transparent',
                  color: theme.colors.primary,
                  fontSize: theme.fontSizes.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Icon name={showPassword.current ? 'visibility_off' : 'visibility'} size={16} />
                {showPassword.current ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* New Password */}
            <div>
              <Input
                label="New Password"
                type={showPassword.new ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                placeholder="Enter new password"
              />
              <button
                onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                style={{
                  marginTop: theme.spacing.xs,
                  padding: theme.spacing.xs,
                  backgroundColor: 'transparent',
                  color: theme.colors.primary,
                  fontSize: theme.fontSizes.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Icon name={showPassword.new ? 'visibility_off' : 'visibility'} size={16} />
                {showPassword.new ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* Confirm Password */}
            <div>
              <Input
                label="Confirm New Password"
                type={showPassword.confirm ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Re-enter new password"
              />
              <button
                onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                style={{
                  marginTop: theme.spacing.xs,
                  padding: theme.spacing.xs,
                  backgroundColor: 'transparent',
                  color: theme.colors.primary,
                  fontSize: theme.fontSizes.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Icon name={showPassword.confirm ? 'visibility_off' : 'visibility'} size={16} />
                {showPassword.confirm ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        </div>

        {/* Password Requirements */}
        {formData.newPassword && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <Card>
              <p style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.md,
              }}>
                Password Requirements
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.sm,
              }}>
                {[
                  { label: 'At least 8 characters', met: passwordStrength.minLength },
                  { label: 'One uppercase letter', met: passwordStrength.hasUpperCase },
                  { label: 'One lowercase letter', met: passwordStrength.hasLowerCase },
                  { label: 'One number', met: passwordStrength.hasNumber },
                  { label: 'One special character', met: passwordStrength.hasSpecialChar },
                ].map((requirement, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: theme.spacing.sm,
                    }}
                  >
                    <Icon
                      name={requirement.met ? 'check_circle' : 'cancel'}
                      size={18}
                      color={requirement.met ? '#10B981' : theme.colors.textMuted}
                      filled={requirement.met}
                    />
                    <span style={{
                      fontSize: theme.fontSizes.sm,
                      color: requirement.met ? '#10B981' : theme.colors.textSecondary,
                    }}>
                      {requirement.label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Error Messages */}
        {Object.keys(errors).length > 0 && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <WarningBox
              variant="error"
              message={Object.values(errors)[0]}
            />
          </div>
        )}
      </ContentArea>

      <div style={{
          padding: theme.spacing.md,
          paddingBottom: theme.spacing.lg,
          backgroundColor: theme.colors.surfaceLight,
          borderTop: `1px solid ${theme.colors.borderLight}`,
      }}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
          onClick={handleSubmit}
          icon="check"
        >
          Update Password
        </Button>
      </div>
    </PageContainer>
  );
};

export default ChangePasswordScreen;



