/**
 * PageHeader Component
 * Standardized header with consistent height, spacing, and styling across all screens
 */

import React, { CSSProperties, ReactNode } from 'react';
import { theme } from '@/lib/theme';
import { Icon } from './Icon';

export interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: ReactNode;
  style?: CSSProperties;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  showBack = false, 
  onBack,
  rightAction,
  style,
}) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        backgroundColor: 'transparent',
        borderBottom: 'none',
        boxShadow: 'none',
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.sticky,
        minHeight: 64,
        ...style,
      }}
    >
      {showBack ? (
        <button
          onClick={onBack}
          style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: `background-color ${theme.transitions.fast}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.gray100;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Icon name="arrow_back_ios_new" size={20} />
        </button>
      ) : (
        <div style={{ width: 48 }} />
      )}
      
      <h2 style={{ 
        flex: 1,
        textAlign: 'center',
        fontSize: theme.fontSizes.xl,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.textPrimary,
        paddingRight: rightAction ? 0 : 48,
      }}>
        {title}
      </h2>
      
      {rightAction || <div style={{ width: 48 }} />}
    </header>
  );
};
