/**
 * Animation and transition timing
 */

export const transitions = {
  fast: '0.15s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
} as const;

export type TransitionKey = keyof typeof transitions;
