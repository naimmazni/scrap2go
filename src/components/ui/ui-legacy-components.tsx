// Legacy UI Components - Non-migrated components only
// Icon, Button, Input, Card, Badge, Header, BottomNav are now in separate files

import React, { CSSProperties, ReactNode } from 'react';
import { theme, withOpacity } from '@/lib/theme';
import { Icon } from './Icon';

// Types for remaining components
interface ProgressBarProps {
  progress: number;
  height?: number;
  style?: CSSProperties;
}

interface PageIndicatorProps {
  total: number;
  current: number;
  style?: CSSProperties;
}

interface StepIndicatorProps {
  steps?: number;
  currentStep?: number;
  style?: CSSProperties;
}

interface ScreenContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

interface ScrollableContentProps {
  children: ReactNode;
  bottomPadding?: number;
  style?: CSSProperties;
}

interface FixedBottomContainerProps {
  children: ReactNode;
  blur?: boolean;
  style?: CSSProperties;
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  style?: CSSProperties;
}

interface WarningBoxProps {
  title?: string;
  message: string;
  variant?: 'warning' | 'error' | 'info';
  style?: CSSProperties;
}

interface TipItemProps {
  icon: string;
  title: string;
  description: string;
  style?: CSSProperties;
}

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  size?: number;
  variant?: 'ghost' | 'filled' | 'dark';
  style?: CSSProperties;
}

interface AvatarProps {
  src: string;
  size?: number;
  editable?: boolean;
  onEdit?: () => void;
  style?: CSSProperties;
}

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
  style?: CSSProperties;
}

interface ListItemProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  showArrow?: boolean;
  showBorder?: boolean;
  rightElement?: ReactNode;
  style?: CSSProperties;
}

interface SecurityNoticeProps {
  message?: string;
  style?: CSSProperties;
}

interface SuccessIconProps {
  size?: number;
  animated?: boolean;
  style?: CSSProperties;
}

interface UploadCardProps {
  title: string;
  description: string;
  icon?: string;
  imageUrl: string;
  imageHint?: string;
  uploaded?: boolean;
  warning?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  onUpload?: () => void;
  style?: CSSProperties;
}

// DIVIDER
export const Divider: React.FC<{ style?: CSSProperties }> = ({ style }) => (
  <div style={{ height: 1, backgroundColor: theme.colors.borderLight, margin: `${theme.spacing.md} 0`, ...style }} />
);

// PROGRESS BAR
export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = 8, style }) => (
  <div style={{ width: '100%', height, backgroundColor: theme.colors.gray200, borderRadius: theme.borderRadius.full, overflow: 'hidden', ...style }}>
    <div style={{ width: `${progress}%`, height: '100%', backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.full, transition: `width ${theme.transitions.normal}` }} />
  </div>
);

// PAGE INDICATOR
export const PageIndicator: React.FC<PageIndicatorProps> = ({ total, current, style }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: theme.spacing.sm, ...style }}>
    {Array.from({ length: total }, (_, i) => (
      <div key={i} style={{ width: i === current ? 32 : 10, height: 10, borderRadius: theme.borderRadius.full, backgroundColor: i === current ? theme.colors.primary : theme.colors.gray200, transition: `all ${theme.transitions.fast}` }} />
    ))}
  </div>
);

// STEP INDICATOR
export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps = 4, currentStep = 0, style }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: theme.spacing.sm, padding: theme.spacing.md, ...style }}>
    {Array.from({ length: steps }, (_, i) => (
      <div key={i} style={{ width: i === currentStep ? 32 : 8, height: 8, borderRadius: theme.borderRadius.full, backgroundColor: i === currentStep ? theme.colors.primary : theme.colors.gray300, transition: `all ${theme.transitions.fast}` }} />
    ))}
  </div>
);

// SCREEN CONTAINER
export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: theme.colors.backgroundLight, paddingTop: 54, ...style }}>
    {children}
  </div>
);

// SCROLLABLE CONTENT
export const ScrollableContent: React.FC<ScrollableContentProps> = ({ children, bottomPadding = 100, style }) => (
  <div style={{ flex: 1, overflowY: 'auto', padding: theme.spacing.md, paddingBottom: bottomPadding, ...style }}>
    {children}
  </div>
);

// FIXED BOTTOM CONTAINER
export const FixedBottomContainer: React.FC<FixedBottomContainerProps> = ({ children, blur = true, style }) => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: theme.spacing.md, paddingBottom: theme.spacing.lg, backgroundColor: blur ? withOpacity(theme.colors.backgroundLight, 0.95) : theme.colors.surfaceLight, backdropFilter: blur ? 'blur(8px)' : 'none', borderTop: `1px solid ${theme.colors.borderLight}`, zIndex: theme.zIndex.fixed, ...style }}>
    {children}
  </div>
);

// SECTION TITLE
export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, style }) => (
  <div style={{ marginBottom: theme.spacing.lg, textAlign: centered ? 'center' : 'left', ...style }}>
    <h1 style={{ fontSize: theme.fontSizes['2xl'], fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary, marginBottom: subtitle ? theme.spacing.sm : 0, lineHeight: 1.2 }}>
      {title}
    </h1>
    {subtitle && (<p style={{ fontSize: theme.fontSizes.base, color: theme.colors.textSecondary, lineHeight: 1.5 }}>{subtitle}</p>)}
  </div>
);

// WARNING BOX
export const WarningBox: React.FC<WarningBoxProps> = ({ title, message, variant = 'warning', style }) => {
  const v = { warning: { bg: withOpacity(theme.colors.alertOrange, 0.1), border: withOpacity(theme.colors.alertOrange, 0.2), iconColor: theme.colors.alertOrange, textColor: theme.colors.alertOrangeDark }, error: { bg: withOpacity(theme.colors.error, 0.05), border: withOpacity(theme.colors.error, 0.1), iconColor: theme.colors.error, textColor: theme.colors.error }, info: { bg: withOpacity(theme.colors.primary, 0.05), border: withOpacity(theme.colors.primary, 0.1), iconColor: theme.colors.primary, textColor: theme.colors.primary } }[variant];
  return (
    <div style={{ display: 'flex', gap: theme.spacing.sm, alignItems: 'flex-start', backgroundColor: v.bg, padding: theme.spacing.md, borderRadius: theme.borderRadius.lg, border: `1px solid ${v.border}`, ...style }}>
      <Icon name="warning" size={20} color={v.iconColor} style={{ flexShrink: 0, marginTop: 2 }} />
      <div>
        {title && (<h4 style={{ fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.bold, color: v.iconColor, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>{title}</h4>)}
        <p style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary, lineHeight: 1.4 }}>{message}</p>
      </div>
    </div>
  );
};

// TIP ITEM
export const TipItem: React.FC<TipItemProps> = ({ icon, title, description, style }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: theme.spacing.md, padding: theme.spacing.lg, borderRadius: theme.borderRadius.lg, backgroundColor: theme.colors.gray50, border: `1px solid transparent`, transition: `border-color ${theme.transitions.fast}`, ...style }}>
    <div style={{ width: 48, height: 48, borderRadius: theme.borderRadius.full, backgroundColor: theme.colors.surfaceLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: theme.shadows.sm }}>
      <Icon name={icon} size={24} color={theme.colors.primary} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <h3 style={{ fontSize: theme.fontSizes.lg, fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary }}>{title}</h3>
      <p style={{ fontSize: theme.fontSizes.base, color: theme.colors.textSecondary, lineHeight: 1.4 }}>{description}</p>
    </div>
  </div>
);

// ICON BUTTON
export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, size = 48, variant = 'ghost', style }) => {
  const variantStyles = { ghost: { backgroundColor: 'transparent', color: theme.colors.textPrimary }, filled: { backgroundColor: withOpacity(theme.colors.primary, 0.1), color: theme.colors.primary }, dark: { backgroundColor: withOpacity('#000', 0.2), backdropFilter: 'blur(12px)', color: theme.colors.textLight } };
  return (
    <button onClick={onClick} style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: theme.borderRadius.full, transition: `all ${theme.transitions.fast}`, cursor: 'pointer', border: 'none', ...variantStyles[variant], ...style }}>
      <Icon name={icon} size={24} />
    </button>
  );
};

// AVATAR
export const Avatar: React.FC<AvatarProps> = ({ src, size = 112, editable = false, onEdit, style }) => (
  <div style={{ position: 'relative', cursor: editable ? 'pointer' : 'default', ...style }}>
    <div style={{ width: size, height: size, borderRadius: theme.borderRadius.full, backgroundImage: `url("${src}")`, backgroundSize: 'cover', backgroundPosition: 'center', border: `4px solid ${theme.colors.surfaceLight}`, boxShadow: theme.shadows.sm }} />
    {editable && (
      <div onClick={onEdit} style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.full, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${theme.colors.surfaceLight}`, boxShadow: theme.shadows.md, cursor: 'pointer' }}>
        <Icon name="edit" size={18} color={theme.colors.textLight} />
      </div>
    )}
  </div>
);

// TOGGLE SWITCH
export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onToggle, style }) => (
  <button onClick={onToggle} style={{ width: 48, height: 24, borderRadius: theme.borderRadius.full, backgroundColor: enabled ? theme.colors.primary : theme.colors.gray300, position: 'relative', transition: `background-color ${theme.transitions.fast}`, cursor: 'pointer', border: 'none', ...style }}>
    <div style={{ width: 20, height: 20, borderRadius: theme.borderRadius.full, backgroundColor: theme.colors.surfaceLight, position: 'absolute', top: 2, left: enabled ? 26 : 2, transition: `left ${theme.transitions.fast}`, boxShadow: theme.shadows.sm }} />
  </button>
);

// LIST ITEM
export const ListItem: React.FC<ListItemProps> = ({ icon, label, onClick, showArrow = true, showBorder = false, rightElement, style }) => (
  <button onClick={onClick} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: theme.spacing.md, backgroundColor: 'transparent', border: 'none', borderBottom: showBorder ? `1px solid ${theme.colors.borderLight}` : 'none', cursor: onClick ? 'pointer' : 'default', ...style }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
      {icon && <Icon name={icon} size={20} color={theme.colors.textSecondary} />}
      <span style={{ fontSize: theme.fontSizes.base, fontWeight: theme.fontWeights.medium, color: theme.colors.textPrimary }}>{label}</span>
    </div>
    {rightElement || (showArrow && onClick && <Icon name="chevron_right" size={20} color={theme.colors.textMuted} />)}
  </button>
);

// SECURITY NOTICE
export const SecurityNotice: React.FC<SecurityNoticeProps> = ({ message = 'Your data is encrypted and securely stored.', style }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: theme.spacing.xs, padding: theme.spacing.sm, opacity: 0.8, ...style }}>
    <Icon name="lock" size={14} color={theme.colors.textMuted} />
    <p style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textMuted, fontWeight: theme.fontWeights.medium }}>{message}</p>
  </div>
);

// SUCCESS ICON
export const SuccessIcon: React.FC<SuccessIconProps> = ({ size = 80, animated = true, style }) => (
  <div style={{ position: 'relative', ...style }}>
    <div style={{ position: 'absolute', inset: -20, backgroundColor: withOpacity(theme.colors.primary, 0.2), borderRadius: theme.borderRadius.full, filter: 'blur(20px)', transform: 'scale(1.5)' }} />
    <div style={{ position: 'relative', backgroundColor: theme.colors.surfaceLight, borderRadius: theme.borderRadius.full, padding: theme.spacing.sm, boxShadow: theme.shadows.sm, animation: animated ? 'fadeInUp 0.6s ease-out forwards' : 'none' }}>
      <Icon name="check_circle" size={size} filled color={theme.colors.primary} />
    </div>
  </div>
);

// UPLOAD CARD
export const UploadCard: React.FC<UploadCardProps> = ({ title, description, icon, imageUrl, imageHint, uploaded = false, warning, buttonText, buttonVariant = 'primary', onUpload, style }) => {
  return (
    <div style={{ backgroundColor: theme.colors.surfaceLight, borderRadius: theme.borderRadius.xl, boxShadow: theme.shadows.card, border: `1px solid ${theme.colors.borderLight}`, overflow: 'hidden', ...style }}>
      <div style={{ position: 'relative', width: '100%', height: 160, backgroundColor: theme.colors.gray100, overflow: 'hidden' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', display: 'flex', alignItems: 'flex-end', padding: theme.spacing.md }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs, color: withOpacity('#fff', 0.9), fontSize: theme.fontSizes.sm, fontWeight: theme.fontWeights.medium }}>
            <Icon name="visibility" size={14} />
            {imageHint}
          </div>
        </div>
        {uploaded && (
          <div style={{ position: 'absolute', top: theme.spacing.sm, right: theme.spacing.sm, backgroundColor: theme.colors.success, borderRadius: theme.borderRadius.full, padding: 4 }}>
            <Icon name="check" size={20} color={theme.colors.textLight} />
          </div>
        )}
      </div>
      <div style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 style={{ fontSize: theme.fontSizes.lg, fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary }}>{title}</h3>
            {icon && <Icon name={icon} size={24} color={theme.colors.primary} />}
          </div>
          <p style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary, marginTop: theme.spacing.xs }}>{description}</p>
        </div>
        {warning && <WarningBox message={warning} variant="warning" style={{ padding: theme.spacing.sm }} />}
        <button
          onClick={onUpload}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.sm,
            height: 48,
            padding: '0 20px',
            fontSize: theme.fontSizes.base,
            fontWeight: theme.fontWeights.bold,
            borderRadius: theme.borderRadius.lg,
            cursor: 'pointer',
            border: uploaded ? `2px solid ${theme.colors.primary}` : 'none',
            backgroundColor: uploaded ? 'transparent' : theme.colors.primary,
            color: uploaded ? theme.colors.primary : theme.colors.textLight,
            boxShadow: uploaded ? 'none' : theme.shadows.primary,
            width: '100%',
          }}
        >
          <Icon name={uploaded ? 'check' : 'add_a_photo'} size={20} />
          {uploaded ? 'Uploaded' : buttonText}
        </button>
      </div>
    </div>
  );
};
