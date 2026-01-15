/**
 * Input Component
 * Text input field with label, icons, and error state
 */

import React, { CSSProperties } from 'react';
import { theme } from '@/lib/theme';
import { Icon } from './Icon';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  iconRight?: string;
  error?: string;
  inputStyle?: CSSProperties;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  icon,
  iconRight,
  disabled = false,
  error,
  style,
  inputStyle,
  ...props 
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm, ...style }}>
      {label && (
        <label style={{ 
          fontSize: theme.fontSizes.sm, 
          fontWeight: theme.fontWeights.semibold,
          color: theme.colors.textPrimary,
        }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <div style={{ 
            position: 'absolute', 
            left: 12, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: theme.colors.textMuted,
          }}>
            <Icon name={icon} size={20} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: '100%',
            height: 56,
            padding: `0 ${icon ? '44px' : '16px'}`,
            paddingRight: iconRight ? '44px' : '16px',
            fontSize: theme.fontSizes.base,
            fontWeight: theme.fontWeights.medium,
            color: theme.colors.textPrimary,
            backgroundColor: theme.colors.surfaceLight,
            border: `1px solid ${error ? theme.colors.error : theme.colors.borderLight}`,
            borderRadius: theme.borderRadius.lg,
            outline: 'none',
            transition: `border-color ${theme.transitions.fast}`,
            ...inputStyle,
          }}
          {...props}
        />
        {iconRight && (
          <div style={{ 
            position: 'absolute', 
            right: 12, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: theme.colors.textMuted,
          }}>
            <Icon name={iconRight} size={20} />
          </div>
        )}
      </div>
      {error && (
        <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.error }}>
          {error}
        </span>
      )}
    </div>
  );
};
