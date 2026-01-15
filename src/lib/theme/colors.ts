/**
 * Color palette for the Scrap2Go application
 * Centralized color definitions for consistent theming
 */

export const colors = {
  // Primary Colors
  primary: '#2196F3',
  primaryDark: '#1976D2',
  primaryLight: '#90CAF9',
  
  // Background Colors
  backgroundLight: '#F8FAFC',
  backgroundDark: '#0F172A',
  
  // Surface Colors
  surfaceLight: '#FFFFFF',
  surfaceDark: '#1E293B',
  
  // Alert/Accent Colors
  alertOrange: '#FF9800',
  alertOrangeDark: '#E65100',
  success: '#4CAF50',
  successLight: '#E8F5E9',
  successGreen: '#10B981',
  error: '#F44336',
  errorLight: '#FFEBEE',
  warning: '#FFC107',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  yellow: '#FBBF24',
  
  // Base Colors
  black: '#000000',
  white: '#FFFFFF',
  
  // Text Colors
  textPrimary: '#111518',
  textSecondary: '#60778A',
  textMuted: '#9CAFC0',
  textLight: '#FFFFFF',
  
  // Border Colors
  borderLight: '#DBE1E6',
  borderDark: '#334B5C',
  
  // Gray Scale
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray300: '#CBD5E1',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  gray700: '#334155',
  gray800: '#1E293B',
  gray900: '#0F172A',
} as const;

export type ColorKey = keyof typeof colors;
