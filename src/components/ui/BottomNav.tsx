/**
 * BottomNav Component
 * Bottom navigation bar with tabs
 */

import React from 'react';
import { theme, withOpacity } from '@/lib/theme';
import { Icon } from './Icon';

export interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'history', icon: 'history', label: 'History' },
    { id: 'profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.surfaceLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        paddingBottom: theme.spacing.lg,
        zIndex: theme.zIndex.fixed,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            padding: theme.spacing.sm,
            color: activeTab === tab.id ? theme.colors.primary : theme.colors.textMuted,
            transition: `color ${theme.transitions.fast}`,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              padding: '4px 16px',
              borderRadius: theme.borderRadius.full,
              backgroundColor: activeTab === tab.id ? withOpacity(theme.colors.primary, 0.1) : 'transparent',
            }}
          >
            <Icon name={tab.icon} size={24} filled={activeTab === tab.id} />
          </div>
          <span style={{ 
            fontSize: theme.fontSizes.xs, 
            fontWeight: activeTab === tab.id ? theme.fontWeights.bold : theme.fontWeights.medium,
          }}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
