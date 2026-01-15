/**
 * HistoryCard Component
 * Reusable card for displaying scrap history items
 */

import React, { CSSProperties } from 'react';
import { theme } from '@/lib/theme';
import { Badge } from './Badge';

export interface HistoryCardProps {
  plate: string;
  model: string;
  date: string;
  payout: string;
  status: 'completed' | 'archived';
  image: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({
  plate,
  model,
  date,
  payout,
  status,
  image,
  onClick,
  style,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: theme.borderRadius.xl,
        backgroundColor: theme.colors.surfaceLight,
        boxShadow: theme.shadows.card,
        overflow: 'hidden',
        opacity: status === 'archived' ? 0.9 : 1,
        cursor: onClick ? 'pointer' : 'default',
        transition: `transform ${theme.transitions.fast}`,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: 'relative',
          height: 160,
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: status === 'archived' ? 'grayscale(100%)' : 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          }}
        />

        {/* Status Badge */}
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <Badge
            variant={status === 'completed' ? 'success' : 'gray'}
            icon={status === 'completed' ? 'check_circle' : 'archive'}
            size="sm"
          >
            {status === 'completed' ? 'Completed' : 'Archived'}
          </Badge>
        </div>

        {/* Date */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 16,
            color: theme.colors.textLight,
          }}
        >
          <p
            style={{
              fontSize: theme.fontSizes.xs,
              opacity: 0.9,
            }}
          >
            Scrapped on
          </p>
          <p
            style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {date}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div style={{ padding: theme.spacing.lg }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: theme.spacing.sm,
          }}
        >
          <div>
            <h4
              style={{
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                marginBottom: 4,
              }}
            >
              {plate}
            </h4>
            <p
              style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}
            >
              {model}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontSize: theme.fontSizes.xs,
                color: theme.colors.textMuted,
                marginBottom: 4,
              }}
            >
              Payout
            </p>
            <p
              style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.success,
              }}
            >
              {payout}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
