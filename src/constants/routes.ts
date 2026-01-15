/**
 * Centralized route constants for the application
 * Use these constants instead of hardcoding paths throughout the app
 */

export const ROUTES = {
  // Public Routes
  HOME: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  
  // Dashboard
  DASHBOARD: '/home',
  
  // Profile & Settings
  PROFILE: '/profile',
  PROFILE_SETTINGS: '/profile-settings',
  APPEARANCE_SETTINGS: '/appearance-settings',
  LANGUAGE_SETTINGS: '/language-settings',
  CHANGE_PASSWORD: '/change-password',
  CHANGE_PIN: '/change-pin',
  
  // Onboarding & Authentication
  ONBOARDING: '/onboarding',
  OTP: '/otp',
  
  // Vehicle & Valuation
  PHOTO_GUIDE: '/photo-guide',
  PHOTO_GUIDANCE_AI: '/photo-guidance-ai',
  CAMERA: '/camera',
  GALLERY_PERMISSION: '/gallery-permission',
  DOCUMENT_PREVIEW: '/document-preview',
  VEHICLE_DETAILS: '/vehicle-details',
  VALUATION: '/valuation',
  
  // Location & Scheduling
  LOCATION: '/location',
  SAVED_ADDRESSES: '/saved-addresses',
  SCHEDULE: '/schedule',
  
  // Tracking & History
  TRACKING: '/tracking',
  HISTORY: '/history',
  ORDER_TIMELINE: '/order-timeline',
  
  // Payment & Bank
  PAYMENT_METHOD: '/payment-method',
  BANK_DETAILS: '/bank-details',
  PAYOUT_CONFIRMATION: '/payout-confirmation',
  RECEIPT: '/receipt',
  
  // Success & Rating
  SUCCESS: '/success',
  JPJ_SUCCESS: '/jpj-success',
  RATING: '/rating',
  
  // Notifications
  NOTIFICATIONS: '/notifications',
  NOTIFICATION_DETAILS: (id: string) => `/notification/${id}`,
  
  // Identity Verification
  IDENTITY_VERIFICATION: '/identity-verification',
  OWNERSHIP_TRANSFER: '/ownership-transfer',
  VEHICLE_TIMELINE: '/vehicle-timeline',
  
  // Support & Info
  HELP_CENTER: '/help-center',
  CONTACT_SUPPORT: '/contact-support',
  REFERRAL: '/referral',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
} as const;

export type RouteKey = keyof typeof ROUTES;
