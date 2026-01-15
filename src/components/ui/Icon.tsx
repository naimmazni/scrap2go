/**
 * Icon Component
 * Wrapper for Material Symbols icons
 */

import React, { CSSProperties } from 'react';

export interface IconProps {
  name: string;
  size?: number;
  filled?: boolean;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  filled = false, 
  color, 
  style, 
  className = '' 
}) => (
  <span
    className={`material-symbols-outlined ${filled ? 'filled' : ''} ${className}`}
    style={{
      fontSize: size,
      color: color || 'inherit',
      fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : undefined,
      ...style,
    }}
  >
    {name}
  </span>
);
