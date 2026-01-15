/**
 * MenuItem Component
 * Reusable menu item for settings and profile screens
 */

import React, { CSSProperties } from 'react';
import { theme, withOpacity } from '@/lib/theme';
import { Icon } from './Icon';
import { Badge } from './Badge';

export interface MenuItemProps {
  icon: string;
  label: string;
  badge?: string;
  danger?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  badge,
  danger = false,
  onClick,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        gap: theme.spacing.md,
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        transition: `background-color ${theme.transitions.fast}`,
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.colors.gray50;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: theme.borderRadius.lg,
          backgroundColor: danger ? withOpacity(theme.colors.error, 0.1) : theme.colors.gray100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon
          name={icon}
          size={20}
          color={danger ? theme.colors.error : theme.colors.textSecondary}
        />
      </div>
      <span
        style={{
          flex: 1,
          fontSize: theme.fontSizes.base,
          fontWeight: theme.fontWeights.medium,
          color: danger ? theme.colors.error : theme.colors.textPrimary,
        }}
      >
        {label}
      </span>
      {badge && <Badge variant="primary" size="sm">{badge}</Badge>}
      <Icon name="chevron_right" size={20} color={theme.colors.gray300} />
    </button>
  );
};
