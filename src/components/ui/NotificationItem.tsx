/**
 * NotificationItem Component
 * Reusable notification card with icon, title, description, and timestamp
 */

import React, { CSSProperties } from 'react';
import { theme, withOpacity } from '@/lib/theme';
import { Icon } from './Icon';

export interface NotificationItemProps {
  type?: 'success' | 'info' | 'warning' | 'promo';
  icon: string;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const getIconStyle = (type: NotificationItemProps['type']) => {
  const styles = {
    success: { bg: withOpacity('#10B981', 0.1), color: '#10B981' },
    info: { bg: withOpacity(theme.colors.primary, 0.1), color: theme.colors.primary },
    warning: { bg: withOpacity(theme.colors.alertOrange, 0.1), color: theme.colors.alertOrangeDark },
    promo: { bg: withOpacity('#8B5CF6', 0.1), color: '#8B5CF6' },
  };
  return styles[type || 'info'];
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  type = 'info',
  icon,
  title,
  description,
  time,
  unread = false,
  onClick,
  style,
}) => {
  const iconStyle = getIconStyle(type);

  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        gap: theme.spacing.md,
        padding: theme.spacing.lg,
        backgroundColor: unread ? withOpacity(theme.colors.primary, 0.03) : theme.colors.surfaceLight,
        borderBottom: `1px solid ${theme.colors.borderLight}`,
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
        e.currentTarget.style.backgroundColor = unread
          ? withOpacity(theme.colors.primary, 0.03)
          : theme.colors.surfaceLight;
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: theme.borderRadius.lg,
          backgroundColor: iconStyle.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={24} color={iconStyle.color} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm, marginBottom: 4 }}>
          <h4
            style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
            }}
          >
            {title}
          </h4>
          {unread && (
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: theme.borderRadius.full,
                backgroundColor: theme.colors.primary,
              }}
            />
          )}
        </div>

        <p
          style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
            lineHeight: 1.5,
            marginBottom: theme.spacing.xs,
          }}
        >
          {description}
        </p>

        <span
          style={{
            fontSize: theme.fontSizes.xs,
            color: theme.colors.textMuted,
          }}
        >
          {time}
        </span>
      </div>
    </button>
  );
};
