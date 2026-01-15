/**
 * Shadow definitions
 * Box shadows for elevation and depth
 */

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.07)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  primary: '0 8px 16px rgba(33, 150, 243, 0.3)',
  card: '0 2px 8px rgba(0, 0, 0, 0.08)',
  floating: '0 8px 30px rgba(0, 0, 0, 0.12)',
} as const;

export type ShadowKey = keyof typeof shadows;
