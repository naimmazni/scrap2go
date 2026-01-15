/**
 * Badge Component
 * Small colored label for status and tags
 */

import React, { CSSProperties, ReactNode } from 'react';
import { theme, withOpacity } from '@/lib/theme';
import { Icon } from './Icon';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'gray';
  size?: 'sm' | 'md';
  icon?: string;
  style?: CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon,
  style,
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: withOpacity(theme.colors.primary, 0.1),
      color: theme.colors.primary,
    },
    success: {
      backgroundColor: theme.colors.successLight,
      color: theme.colors.success,
    },
    warning: {
      backgroundColor: withOpacity(theme.colors.alertOrange, 0.1),
      color: theme.colors.alertOrange,
    },
    error: {
      backgroundColor: theme.colors.errorLight,
      color: theme.colors.error,
    },
    gray: {
      backgroundColor: theme.colors.gray100,
      color: theme.colors.gray600,
    },
  };

  const sizeStyles = {
    sm: { padding: '4px 8px', fontSize: theme.fontSizes.xs },
    md: { padding: '6px 12px', fontSize: theme.fontSizes.sm },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        borderRadius: theme.borderRadius.full,
        fontWeight: theme.fontWeights.bold,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
};
