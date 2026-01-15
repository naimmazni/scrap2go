/**
 * Centralized Theme Configuration for Scrap2Go
 * All styling variables imported from modular files
 */

import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { borderRadius } from './radius';
import { shadows } from './shadows';
import { transitions } from './transitions';
import { zIndex } from './zIndex';
import { breakpoints } from './breakpoints';

export const theme = {
  colors,
  ...typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
} as const;

/**
 * Helper function to get color with opacity
 * @param color - Hex color code
 * @param opacity - Opacity value (0-1)
 * @returns RGBA color string
 */
export const withOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Re-export everything for convenience
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './shadows';
export * from './transitions';
export * from './zIndex';
export * from './breakpoints';

export default theme;
