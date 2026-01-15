/**
 * PageContainer Component
 * Standardized page layout with consistent structure
 */

import React, { CSSProperties, ReactNode } from 'react';
import { theme } from '@/lib/theme';

export interface PageContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, style }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: theme.colors.backgroundLight,
        position: 'relative',
        paddingTop: 54, // Consistent top padding for all pages
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export interface ContentAreaProps {
  children: ReactNode;
  withBottomNav?: boolean;
  style?: CSSProperties;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ 
  children, 
  withBottomNav = false,
  style 
}) => {
  return (
    <main
      style={{
        flex: 1,
        overflowY: 'auto',
        paddingBottom: withBottomNav ? 100 : theme.spacing.lg,
        ...style,
      }}
    >
      {children}
    </main>
  );
};
