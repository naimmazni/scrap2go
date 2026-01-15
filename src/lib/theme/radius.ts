/**
 * Border radius values
 * Consistent rounded corners throughout the application
 */

export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
