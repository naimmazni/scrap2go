/**
 * Application configuration constants
 * Centralized place for app-wide configuration values
 */

export const APP_CONFIG = {
  APP_NAME: 'Scrap2Go',
  APP_DESCRIPTION: 'Turn Your Scrap Car into Cash',
  
  // Environment
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
  
  // API Configuration (add when backend is ready)
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.scrap2go.com',
  API_TIMEOUT: 30000, // 30 seconds
  
  // Feature Flags
  FEATURES: {
    AI_PHOTO_GUIDANCE: true,
    BIOMETRIC_AUTH: false,
    DARK_MODE: true,
  },
  
  // UI Constants
  SAFE_AREA_TOP: 54, // Dynamic Island height + spacing
  BOTTOM_NAV_HEIGHT: 80,
  HEADER_HEIGHT: 60,
  
  // Validation
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  
  // Language
  DEFAULT_LANGUAGE: 'EN',
  SUPPORTED_LANGUAGES: ['EN', 'BM'],
} as const;

export default APP_CONFIG;
