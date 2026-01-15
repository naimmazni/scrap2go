/**
 * API Endpoints
 * Centralized API endpoint definitions
 */

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    VERIFY_OTP: '/auth/verify-otp',
    RESEND_OTP: '/auth/resend-otp',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
    CHANGE_PIN: '/user/change-pin',
  },

  // Vehicle
  VEHICLE: {
    LIST: '/vehicles',
    DETAILS: (id: string) => `/vehicles/${id}`,
    CREATE: '/vehicles',
    UPDATE: (id: string) => `/vehicles/${id}`,
    DELETE: (id: string) => `/vehicles/${id}`,
    VALUATION: (id: string) => `/vehicles/${id}/valuation`,
  },

  // Booking
  BOOKING: {
    LIST: '/bookings',
    DETAILS: (id: string) => `/bookings/${id}`,
    CREATE: '/bookings',
    UPDATE: (id: string) => `/bookings/${id}`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
    AVAILABLE_SLOTS: '/bookings/available-slots',
  },

  // Payment
  PAYMENT: {
    METHODS: '/payment/methods',
    ADD_METHOD: '/payment/methods',
    UPDATE_METHOD: (id: string) => `/payment/methods/${id}`,
    DELETE_METHOD: (id: string) => `/payment/methods/${id}`,
    TRANSACTIONS: '/payment/transactions',
  },

  // Location
  LOCATION: {
    SEARCH: '/locations/search',
    GEOCODE: '/locations/geocode',
    REVERSE_GEOCODE: '/locations/reverse-geocode',
  },

  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    DETAILS: (id: string) => `/notifications/${id}`,
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/read-all',
    DELETE: (id: string) => `/notifications/${id}`,
  },

  // Support
  SUPPORT: {
    SUBMIT_TICKET: '/support/tickets',
    FAQ: '/support/faq',
  },
} as const;
