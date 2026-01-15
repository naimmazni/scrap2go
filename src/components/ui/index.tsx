/**
 * UI Components - Barrel Export
 * Centralized export for all UI components
 */

// Core Components
export * from './Icon';
export * from './Button';
export * from './Input';
export * from './Card';
export * from './Badge';
export * from './Header';
export * from './BottomNav';

// Layout Components
export * from './PageHeader';
export * from './PageContainer';

// Composite Components
export * from './MenuItem';
export * from './NotificationItem';
export * from './HistoryCard';

// Legacy components - temporarily import from ui-legacy
// These will be migrated to separate files gradually
export {
  Divider,
  ProgressBar,
  PageIndicator,
  StepIndicator,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
  SectionTitle,
  WarningBox,
  TipItem,
  IconButton,
  Avatar,
  ToggleSwitch,
  ListItem,
  SecurityNotice,
  SuccessIcon,
  UploadCard,
} from './ui-legacy-components';
