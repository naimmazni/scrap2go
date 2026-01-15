/**
 * Header Component
 * App header with back button and action area
 */

import React, { CSSProperties, ReactNode } from 'react';
import { theme } from '@/lib/theme';
import { Icon } from './Icon';

export interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: ReactNode;
  transparent?: boolean;
  style?: CSSProperties;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBack = false, 
  onBack,
  rightAction,
  transparent = false,
  style,
}) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        backgroundColor: transparent ? 'transparent' : theme.colors.surfaceLight,
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.sticky,
        ...style,
      }}
    >
      {showBack ? (
        <button
          onClick={onBack}
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.borderRadius.full,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Icon name="arrow_back" size={24} />
        </button>
      ) : (
        <div style={{ width: 48 }} />
      )}
      
      <h2 style={{ 
        fontSize: theme.fontSizes.lg, 
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center',
        flex: 1,
      }}>
        {title}
      </h2>
      
      {rightAction || <div style={{ width: 48 }} />}
    </header>
  );
};
