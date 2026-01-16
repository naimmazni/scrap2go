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
      router.push('/bank-details');
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup');
    router.push('/bank-details');
  };

  const handleAppleSignup = () => {
    console.log('Apple signup');
    router.push('/bank-details');
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
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Button
            variant="outline"
            onClick={handleGoogleSignup}
            style={{
                        width: '100%',
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: theme.spacing.sm,
                        backgroundColor: theme.colors.surfaceLight,
                        border: `1px solid ${theme.colors.borderLight}`,
                        borderRadius: theme.borderRadius.lg,
                        fontSize: theme.fontSizes.base,
                        fontWeight: theme.fontWeights.semibold,
                        color: theme.colors.textPrimary,
                        cursor: 'pointer',
                        marginBottom: theme.spacing.md,
                        transition: `all ${theme.transitions.fast}`,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 10.2272C19.5 9.51819 19.4409 8.83635 19.3318 8.18164H10V12.0499H15.3818C15.15 13.2999 14.4455 14.3590 13.3864 15.0681V17.5772H16.5682C18.4773 15.8363 19.5 13.2726 19.5 10.2272Z" fill="#4285F4"/>
                        <path d="M10 20C12.7 20 14.9636 19.1045 16.5682 17.5772L13.3864 15.0681C12.4909 15.6681 11.3455 16.0226 10 16.0226C7.39545 16.0226 5.19091 14.2635 4.40455 11.8999H1.13636V14.4908C2.73182 17.7589 6.10909 20 10 20Z" fill="#34A853"/>
                        <path d="M4.40455 11.8999C4.20455 11.2999 4.09091 10.6590 4.09091 9.99993C4.09091 9.34084 4.20455 8.69993 4.40455 8.09993V5.50903H1.13636C0.413636 6.95903 0 8.43175 0 9.99993C0 11.5681 0.413636 13.0408 1.13636 14.4908L4.40455 11.8999Z" fill="#FBBC05"/>
                        <path d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47272L16.6409 2.60454C14.9591 0.990908 12.6955 0 10 0C6.10909 0 2.73182 2.24091 1.13636 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z" fill="#EA4335"/>
                      </svg>
                      Sign Up with Google
                    </Button>
          <Button
            variant="outline"
            onClick={handleAppleSignup}
            style={{
                        width: '100%',
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: theme.spacing.sm,
                        backgroundColor: theme.colors.textPrimary,
                        border: 'none',
                        borderRadius: theme.borderRadius.lg,
                        fontSize: theme.fontSizes.base,
                        fontWeight: theme.fontWeights.semibold,
                        color: theme.colors.textLight,
                        cursor: 'pointer',
                        marginBottom: theme.spacing.xl,
                        transition: `all ${theme.transitions.fast}`,
                      }}
                    >
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6631 18.3715C19.3059 19.1977 18.8839 19.9528 18.3944 20.6395C17.7274 21.5696 17.1783 22.2286 16.7527 22.6166C16.0977 23.2361 15.3977 23.5529 14.6497 23.5696C14.1107 23.5696 13.4575 23.4125 12.6945 23.0931C11.9289 22.775 11.2268 22.6166 10.5856 22.6166C9.91163 22.6166 9.18953 22.775 8.41784 23.0931C7.64468 23.4125 7.02306 23.5779 6.54874 23.5931C5.83359 23.6221 5.11696 23.2945 4.39736 22.6166C3.93603 22.1945 3.36407 21.5098 2.68294 20.5638C1.95208 19.5556 1.35058 18.3897 0.877472 17.0629C0.370892 15.6172 0.117188 14.2201 0.117188 12.8703C0.117188 11.3301 0.451626 9.99928 1.12198 8.88115C1.64804 8.00378 2.34582 7.31023 3.21682 6.79901C4.08782 6.28779 5.03254 6.02774 6.05401 6.01108C6.62819 6.01108 7.38002 6.18843 8.31399 6.53735C9.24502 6.88775 9.85138 7.06509 10.1297 7.06509C10.3421 7.06509 11.0106 6.85911 12.1281 6.44863C13.184 6.06651 14.0768 5.90782 14.8107 5.96952C16.765 6.12379 18.2386 6.88923 19.2245 8.27082C17.5074 9.29523 16.657 10.7132 16.6737 12.522C16.6891 13.9484 17.2209 15.1496 18.2661 16.1198C18.7441 16.5752 19.2794 16.9307 19.8756 17.1881C19.7487 17.5426 19.6123 17.8822 19.6631 18.3715ZM14.9326 0.599609C14.9326 1.72169 14.5087 2.76821 13.6636 3.73548C12.6295 4.90226 11.3784 5.58015 10.024 5.4665C10.0069 5.33193 9.99695 5.19058 9.99695 5.04238C9.99695 3.96609 10.4789 2.8115 11.3415 1.86677C11.772 1.38982 12.3157 0.994965 12.972 0.682708C13.6269 0.375196 14.2467 0.205857 14.8294 0.177734C14.8467 0.318532 14.9326 0.459316 14.9326 0.599594V0.599609Z" fill="white"/>
                      </svg>
                      Sign Up with Apple
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
