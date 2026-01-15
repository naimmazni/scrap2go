/**
 * Button Component
 * Primary UI button with multiple variants and sizes
 */

import React, { CSSProperties, ReactNode } from 'react';
import { theme } from '@/lib/theme';
import { Icon } from './Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: string;
  iconRight?: string;
  children: ReactNode;
}

const buttonBaseStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.sm,
  fontWeight: theme.fontWeights.bold,
  borderRadius: theme.borderRadius.lg,
  transition: `all ${theme.transitions.fast}`,
  cursor: 'pointer',
  border: 'none',
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  icon,
  iconRight,
  disabled = false,
  onClick,
  style,
  ...props 
}) => {
  const sizeStyles = {
    sm: { height: 40, padding: '0 16px', fontSize: theme.fontSizes.sm },
    md: { height: 48, padding: '0 20px', fontSize: theme.fontSizes.base },
    lg: { height: 56, padding: '0 24px', fontSize: theme.fontSizes.lg },
  };

  const variantStyles = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.textLight,
      boxShadow: theme.shadows.primary,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`,
    },
    outline: {
      backgroundColor: 'transparent',
      color: theme.colors.textPrimary,
      border: `1px solid ${theme.colors.borderLight}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.textSecondary,
    },
    danger: {
      backgroundColor: theme.colors.error,
      color: theme.colors.textLight,
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...buttonBaseStyle,
        ...sizeStyles[size],
        ...variantStyles[variant],
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      {...props}
    >
      {icon && <Icon name={icon} size={20} />}
      {children}
      {iconRight && <Icon name={iconRight} size={20} />}
    </button>
  );
};
