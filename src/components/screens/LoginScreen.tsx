'use client'

// LoginScreen.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// Assuming these paths exist based on your snippet
import { theme } from '@/lib/theme'; 
import { Icon, Button, PageContainer, ContentArea } from '@/components/ui'; 

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('EN');

  const handleLogin = () => {
    // Add validation logic here before navigating
    console.log('Logging in with:', email, language);
    router.push('/home');
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    console.log('Apple login');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleSignUp = () => {
    router.push('/registration');
  };

  return (
    <PageContainer>
      <ContentArea>
      {/* --- Header with Logo and Language Selector --- */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${theme.spacing.md}`,
        backgroundColor: theme.colors.surfaceLight,
      }}>
        {/* Logo Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.sm,
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.lg,
            backgroundColor: theme.colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon name="recycling" size={28} color={theme.colors.textLight} filled />
          </div>
          <h2 style={{
            fontSize: theme.fontSizes.xl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            margin: 0,
          }}>
            Scrap2Go
          </h2>
        </div>

        {/* Language Toggle */}
        <div style={{
          display: 'flex',
          backgroundColor: theme.colors.gray100,
          borderRadius: theme.borderRadius.lg,
          padding: 4,
        }}>
          {['BM', 'EN'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              style={{
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: language === lang ? theme.colors.textPrimary : theme.colors.textMuted,
                backgroundColor: language === lang ? theme.colors.surfaceLight : 'transparent',
                border: 'none',
                borderRadius: theme.borderRadius.md,
                cursor: 'pointer',
                transition: `all ${theme.transitions.fast}`,
                boxShadow: language === lang ? theme.shadows.sm : 'none',
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* --- Main Content --- */}
      <div style={{
        flex: 1,
        padding: `${theme.spacing.xl} ${theme.spacing.md}`,
        backgroundColor: theme.colors.surfaceLight,
        maxWidth: '480px', // Added distinct width constraint for larger screens
        width: '100%',
        alignSelf: 'center', // Center on desktop
      }}>
        
        {/* Title */}
        <h1 style={{
          fontSize: theme.fontSizes['3xl'],
          fontWeight: theme.fontWeights.bold,
          color: theme.colors.textPrimary,
          marginBottom: theme.spacing.xs,
          margin: 0,
        }}>
          Log In
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: theme.fontSizes.base,
          color: theme.colors.textSecondary,
          marginBottom: theme.spacing.xl,
          marginTop: theme.spacing.xs,
        }}>
          Enter your details to access your account.
        </p>

        {/* Email Input */}
        <div style={{ marginBottom: theme.spacing.md }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.colors.textMuted,
              zIndex: 1,
              pointerEvents: 'none', // Ensures click goes through to input
            }}>
              <Icon name="person" size={20} />
            </div>
            <input
              type="email"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                height: 56,
                paddingLeft: 48,
                paddingRight: 16,
                fontSize: theme.fontSizes.base,
                color: theme.colors.textPrimary,
                backgroundColor: theme.colors.gray100,
                border: 'none',
                borderRadius: theme.borderRadius.lg,
                outline: 'none',
                transition: `all ${theme.transitions.fast}`,
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: theme.spacing.sm }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.colors.textMuted,
              zIndex: 1,
              pointerEvents: 'none',
            }}>
              <Icon name="lock" size={20} />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                height: 56,
                paddingLeft: 48,
                paddingRight: 16,
                fontSize: theme.fontSizes.base,
                color: theme.colors.textPrimary,
                backgroundColor: theme.colors.gray100,
                border: 'none',
                borderRadius: theme.borderRadius.lg,
                outline: 'none',
                transition: `all ${theme.transitions.fast}`,
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div style={{
          textAlign: 'right',
          marginBottom: theme.spacing.lg,
        }}>
          <button
            onClick={handleForgotPassword}
            style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.medium,
              color: theme.colors.primary,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <Button
          fullWidth
          size="lg"
          onClick={handleLogin}
          style={{
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
          }}
        >
          Login
        </Button>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: theme.spacing.lg,
        }}>
          <div style={{ flex: 1, height: 1, backgroundColor: theme.colors.borderLight }} />
          <span style={{
            padding: `0 ${theme.spacing.md}`,
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textMuted,
          }}>
            Or continue with
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: theme.colors.borderLight }} />
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
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
          Login with Google
        </button>

        {/* Apple Login Button */}
        <button
          onClick={handleAppleLogin}
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
          Login with Apple
        </button>

        {/* Sign Up Link */}
        <div style={{ textAlign: 'center' }}>
          <span style={{
            fontSize: theme.fontSizes.base,
            color: theme.colors.textSecondary,
          }}>
            Don't have an account?{' '}
          </span>
          <button
            onClick={handleSignUp}
            style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.primary,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      </ContentArea>
    </PageContainer>
  );
};

export default LoginScreen;


