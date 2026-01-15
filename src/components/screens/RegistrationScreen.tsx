'use client'

// Registration Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer, PageHeader, ContentArea } from '@/components/ui';

const RegistrationScreen: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid Malaysian phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      console.log('Registering user:', formData);
      // TODO: Implement actual registration logic
      router.push('/onboarding');
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup');
    router.push('/onboarding');
  };

  const handleAppleSignup = () => {
    console.log('Apple signup');
    router.push('/onboarding');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <PageContainer>
      <PageHeader
        title="Create Account"
        showBack
        onBack={() => router.back()}
      />
      <ContentArea>
      <main style={{
        flex: 1,
        padding: theme.spacing.lg,
        paddingTop: 0,
      }}>
        {/* Subtitle */}
        <p style={{
          textAlign: 'center',
          color: theme.colors.textSecondary,
          fontSize: theme.fontSizes.sm,
          marginBottom: theme.spacing.xl,
        }}>
          Join Scrap2Go and turn your old car into cash
        </p>

        {/* Registration Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
          marginBottom: theme.spacing.lg,
        }}>
          {/* Full Name */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.xs,
            }}>
              Full Name
            </label>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Icon 
                name="person" 
                size={20} 
                color={theme.colors.textSecondary}
                style={{
                  position: 'absolute',
                  left: 16,
                  zIndex: 1,
                }}
              />
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  fontSize: theme.fontSizes.base,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${errors.fullName ? theme.colors.error : theme.colors.borderLight}`,
                  backgroundColor: theme.colors.surfaceLight,
                  outline: 'none',
                }}
              />
            </div>
            {errors.fullName && (
              <p style={{
                color: theme.colors.error,
                fontSize: theme.fontSizes.xs,
                marginTop: theme.spacing.xs,
              }}>
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.xs,
            }}>
              Email Address
            </label>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Icon 
                name="email" 
                size={20} 
                color={theme.colors.textSecondary}
                style={{
                  position: 'absolute',
                  left: 16,
                  zIndex: 1,
                }}
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="example@email.com"
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  fontSize: theme.fontSizes.base,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${errors.email ? theme.colors.error : theme.colors.borderLight}`,
                  backgroundColor: theme.colors.surfaceLight,
                  outline: 'none',
                }}
              />
            </div>
            {errors.email && (
              <p style={{
                color: theme.colors.error,
                fontSize: theme.fontSizes.xs,
                marginTop: theme.spacing.xs,
              }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.xs,
            }}>
              Phone Number
            </label>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Icon 
                name="phone" 
                size={20} 
                color={theme.colors.textSecondary}
                style={{
                  position: 'absolute',
                  left: 16,
                  zIndex: 1,
                }}
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+60 12-345 6789"
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  fontSize: theme.fontSizes.base,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${errors.phone ? theme.colors.error : theme.colors.borderLight}`,
                  backgroundColor: theme.colors.surfaceLight,
                  outline: 'none',
                }}
              />
            </div>
            {errors.phone && (
              <p style={{
                color: theme.colors.error,
                fontSize: theme.fontSizes.xs,
                marginTop: theme.spacing.xs,
              }}>
                {errors.phone}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.xs,
            }}>
              Password
            </label>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Icon 
                name="lock" 
                size={20} 
                color={theme.colors.textSecondary}
                style={{
                  position: 'absolute',
                  left: 16,
                  zIndex: 1,
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Minimum 8 characters"
                style={{
                  width: '100%',
                  padding: '14px 48px',
                  fontSize: theme.fontSizes.base,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${errors.password ? theme.colors.error : theme.colors.borderLight}`,
                  backgroundColor: theme.colors.surfaceLight,
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 16,
                  zIndex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <Icon 
                  name={showPassword ? 'visibility_off' : 'visibility'} 
                  size={20} 
                  color={theme.colors.textSecondary}
                />
              </button>
            </div>
            {errors.password && (
              <p style={{
                color: theme.colors.error,
                fontSize: theme.fontSizes.xs,
                marginTop: theme.spacing.xs,
              }}>
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label style={{
              display: 'block',
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.xs,
            }}>
              Confirm Password
            </label>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Icon 
                name="lock" 
                size={20} 
                color={theme.colors.textSecondary}
                style={{
                  position: 'absolute',
                  left: 16,
                  zIndex: 1,
                }}
              />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Re-enter your password"
                style={{
                  width: '100%',
                  padding: '14px 48px',
                  fontSize: theme.fontSizes.base,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${errors.confirmPassword ? theme.colors.error : theme.colors.borderLight}`,
                  backgroundColor: theme.colors.surfaceLight,
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: 16,
                  zIndex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <Icon 
                  name={showConfirmPassword ? 'visibility_off' : 'visibility'} 
                  size={20} 
                  color={theme.colors.textSecondary}
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <p style={{
                color: theme.colors.error,
                fontSize: theme.fontSizes.xs,
                marginTop: theme.spacing.xs,
              }}>
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: theme.spacing.sm,
          marginBottom: theme.spacing.lg,
        }}>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => {
              setAcceptTerms(e.target.checked);
              if (errors.terms) {
                setErrors({ ...errors, terms: '' });
              }
            }}
            style={{
              width: 18,
              height: 18,
              marginTop: 2,
              cursor: 'pointer',
            }}
          />
          <p style={{
            fontSize: theme.fontSizes.xs,
            color: theme.colors.textSecondary,
            lineHeight: 1.5,
          }}>
            I agree to Scrap2Go's{' '}
            <button
              onClick={() => router.push('/terms-of-service')}
              style={{
                color: theme.colors.primary,
                textDecoration: 'underline',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                font: 'inherit',
              }}
            >
              Terms of Service
            </button>
            {' '}and{' '}
            <button
              onClick={() => router.push('/privacy-policy')}
              style={{
                color: theme.colors.primary,
                textDecoration: 'underline',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                font: 'inherit',
              }}
            >
              Privacy Policy
            </button>
          </p>
        </div>
        {errors.terms && (
          <p style={{
            color: theme.colors.error,
            fontSize: theme.fontSizes.xs,
            marginTop: -theme.spacing.sm,
            marginBottom: theme.spacing.md,
          }}>
            {errors.terms}
          </p>
        )}

        {/* Register Button */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleRegister}
          style={{
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.primary,
          }}
        >
          Create Account
        </Button>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.md,
          marginBottom: theme.spacing.lg,
        }}>
          <div style={{
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.borderLight,
          }} />
          <span style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
          }}>
            or continue with
          </span>
          <div style={{
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.borderLight,
          }} />
        </div>

        {/* Social Sign Up */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: theme.spacing.md,
          marginBottom: theme.spacing.xl,
        }}>
          <Button
            variant="outline"
            onClick={handleGoogleSignup}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.sm,
            }}
          >
            <Icon name="account_circle" size={20} />
            Google
          </Button>
          <Button
            variant="outline"
            onClick={handleAppleSignup}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.sm,
            }}
          >
            <Icon name="apple" size={20} />
            Apple
          </Button>
        </div>

        {/* Login Link */}
        <div style={{
          textAlign: 'center',
          marginBottom: theme.spacing.lg,
        }}>
          <span style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
          }}>
            Already have an account?{' '}
          </span>
          <button
            onClick={() => router.push('/login')}
            style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.primary,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Sign In
          </button>
        </div>
      </main>
      </ContentArea>
    </PageContainer>
  );
};

export default RegistrationScreen;
