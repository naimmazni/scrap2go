/**
 * Common TypeScript types and interfaces used throughout the application
 */

import { CSSProperties, ReactNode } from 'react';

// ============================================
// COMPONENT PROPS
// ============================================

export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface IconProps {
  name: string;
  size?: number;
  filled?: boolean;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: string;
  iconRight?: string;
  children: ReactNode;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  iconRight?: string;
  error?: string;
  inputStyle?: CSSProperties;
}

export interface CardProps {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
  border?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;
  style?: CSSProperties;
  onClick?: () => void;
}

// ============================================
// COMMON TYPES
// ============================================

export type Language = 'EN' | 'BM';

export type ThemeMode = 'light' | 'dark' | 'auto';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'gray';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export type AlertVariant = 'warning' | 'error' | 'info' | 'success';

// ============================================
// API TYPES
// ============================================

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  error?: string;
  status: number;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ============================================
// USER & AUTH TYPES
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  language: Language;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token?: string;
}

// ============================================
// VEHICLE TYPES
// ============================================

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  registrationNumber: string;
  vin?: string;
  color?: string;
  mileage?: number;
  condition?: VehicleCondition;
  images: string[];
  createdAt: string;
}

export type VehicleCondition = 'excellent' | 'good' | 'fair' | 'poor' | 'scrap';

export interface VehicleValuation {
  vehicleId: string;
  estimatedValue: number;
  currency: string;
  confidence: number;
  factors: {
    make: number;
    model: number;
    year: number;
    condition: number;
    mileage: number;
  };
  createdAt: string;
  expiresAt: string;
}

// ============================================
// LOCATION TYPES
// ============================================

export interface Address {
  id: string;
  label?: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

// ============================================
// NOTIFICATION TYPES
// ============================================

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

// ============================================
// BOOKING & SCHEDULE TYPES
// ============================================

export interface Booking {
  id: string;
  vehicleId: string;
  userId: string;
  pickupAddress: Address;
  scheduledDate: string;
  timeSlot: string;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

// ============================================
// PAYMENT TYPES
// ============================================

export interface PaymentMethod {
  id: string;
  type: 'bank_transfer' | 'ewallet' | 'cash';
  isDefault: boolean;
  details: BankDetails | EWalletDetails;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

export interface EWalletDetails {
  provider: 'tng' | 'grabpay' | 'boost';
  phoneNumber: string;
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  type: 'payout' | 'refund';
  createdAt: string;
  completedAt?: string;
}

// ============================================
// FORM TYPES
// ============================================

export interface FormField<T = any> {
  value: T;
  error?: string;
  touched: boolean;
  dirty: boolean;
}

export interface FormState<T extends Record<string, any>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
  isSubmitting: boolean;
}
