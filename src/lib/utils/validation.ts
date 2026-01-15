/**
 * Validation utility functions
 * Common validation logic for forms and inputs
 */

/**
 * Validates email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates Malaysian phone number
 */
export const validatePhoneNumber = (phone: string): boolean => {
  // Malaysian phone format: 01X-XXXXXXX or 01XXXXXXXXX
  const phoneRegex = /^(\+?6?01)[0-9]-?[0-9]{7,8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validates password strength
 * At least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates Malaysian vehicle registration number
 */
export const validateVehicleRegistration = (regNo: string): boolean => {
  // Format: ABC1234 or WXY123
  const regRegex = /^[A-Z]{1,3}[0-9]{1,4}$/;
  return regRegex.test(regNo.replace(/\s/g, '').toUpperCase());
};

/**
 * Validates PIN (6 digits)
 */
export const validatePIN = (pin: string): boolean => {
  return /^[0-9]{6}$/.test(pin);
};

/**
 * Validates OTP (6 digits)
 */
export const validateOTP = (otp: string): boolean => {
  return /^[0-9]{6}$/.test(otp);
};

/**
 * Validates required field
 */
export const validateRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

/**
 * Validates minimum length
 */
export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Validates maximum length
 */
export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Validates numeric value
 */
export const validateNumeric = (value: string): boolean => {
  return /^[0-9]+$/.test(value);
};

/**
 * Validates file size
 */
export const validateFileSize = (file: File, maxSizeInMB: number): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

/**
 * Validates file type
 */
export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type);
};
