/**
 * Card Component
 * Container with customizable padding, shadow, and border
 */

import React, { CSSProperties, ReactNode } from 'react';
import { theme } from '@/lib/theme';

export interface CardProps {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
  border?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  padding = 'md', 
  shadow = true,
  border = true,
  rounded = 'xl',
  style,
  onClick,
  ...props 
}) => {
  const paddingMap = {
    none: 0,
    sm: theme.spacing.sm,
    md: theme.spacing.md,
    lg: theme.spacing.lg,
  };

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: theme.colors.surfaceLight,
        padding: paddingMap[padding],
        borderRadius: theme.borderRadius[rounded as keyof typeof theme.borderRadius] || rounded,
        boxShadow: shadow ? theme.shadows.card : 'none',
        border: border ? `1px solid ${theme.colors.borderLight}` : 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: `all ${theme.transitions.fast}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
