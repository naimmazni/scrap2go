/**
 * Breakpoints for responsive design
 * Mobile-first approach
 */

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export type BreakpointKey = keyof typeof breakpoints;
