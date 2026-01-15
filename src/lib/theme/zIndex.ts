/**
 * Z-index layering system
 * Ensures consistent stacking order
 */

export const zIndex = {
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  tooltip: 500,
} as const;

export type ZIndexKey = keyof typeof zIndex;
