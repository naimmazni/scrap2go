/**
 * Formatting utility functions
 * Common formatting logic for display values
 */

/**
 * Formats currency (Malaysian Ringgit)
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'MYR',
  locale: string = 'ms-MY'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Formats phone number to Malaysian format
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  // Format: 01X-XXX XXXX
  if (cleaned.length === 10 || cleaned.length === 11) {
    const prefix = cleaned.slice(0, 3);
    const middle = cleaned.slice(3, 6);
    const end = cleaned.slice(6);
    return `${prefix}-${middle} ${end}`;
  }
  
  return phone;
};

/**
 * Formats date to readable string
 */
export const formatDate = (
  date: string | Date,
  format: 'short' | 'medium' | 'long' = 'medium',
  locale: string = 'en-MY'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = 
    format === 'short' ? { day: '2-digit', month: '2-digit', year: 'numeric' } :
    format === 'long' ? { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' } :
    { day: 'numeric', month: 'short', year: 'numeric' };
  
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};

/**
 * Formats time to readable string
 */
export const formatTime = (
  date: string | Date,
  locale: string = 'en-MY'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(dateObj);
};

/**
 * Formats relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  
  return formatDate(dateObj, 'medium');
};

/**
 * Formats vehicle registration number
 */
export const formatVehicleRegistration = (regNo: string): string => {
  return regNo.toUpperCase().replace(/\s/g, '');
};

/**
 * Formats file size to human readable
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

/**
 * Formats number with thousand separators
 */
export const formatNumber = (num: number, locale: string = 'en-MY'): string => {
  return new Intl.NumberFormat(locale).format(num);
};

/**
 * Truncates text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Capitalizes first letter of each word
 */
export const capitalizeWords = (text: string): string => {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
