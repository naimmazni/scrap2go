// SafeAreaLayout Component
// Provides consistent safe area handling for all screens
// Ensures content renders below the Dynamic Island without hardcoding padding
import React, { CSSProperties, ReactNode } from 'react';

const SAFE_AREA_TOP = 54; // Dynamic Island height (37px) + spacing (17px)

interface SafeAreaLayoutProps {
  children: ReactNode;
  style?: CSSProperties;
  disablePadding?: boolean;
}

const SafeAreaLayout: React.FC<SafeAreaLayoutProps> = ({ children, style = {}, disablePadding = false }) => {
  return (
    <div style={{
      height: '100%',
      paddingTop: disablePadding ? 0 : SAFE_AREA_TOP,
      ...style,
    }}>
      {children}
    </div>
  );
};

export default SafeAreaLayout;
