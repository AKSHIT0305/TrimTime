// src/types/index.ts
// ============================================================
// TrimTime — Shared TypeScript Types
// These types mirror the Prisma schema and are used across
// controllers, services, and API response shapes.
// ============================================================

// Re-export Prisma generated types for convenience
export type {
  User,
  OtpCode,
  Salon,
  SalonPhoto,
  OpeningHours,
  Service,
  Barber,
  BarberService,
  Booking,
  QueueEntry,
  SubscriptionPlan,
} from '../generated/prisma';

export {
  UserRole,
  SalonStatus,
  SubscriptionTier,
  BookingStatus,
  BookingType,
  DayOfWeek,
} from '../generated/prisma';

// ============================================================
// API REQUEST / RESPONSE SHAPES
// ============================================================

/** Standard API success envelope */
export interface ApiResponse<T = unknown> {
  success: true;
  data: T;
  meta?: PaginationMeta;
}

/** Standard API error envelope */
export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

/** Pagination metadata returned with list endpoints */
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/** Common list query parameters */
export interface ListQuery {
  page?: number;
  limit?: number;
  search?: string;
}

// ============================================================
// AUTH TYPES
// ============================================================

export interface JwtPayload {
  userId: string;
  phone: string;
  role: string;
  salonId?: string;   // Set for salon_owner and staff roles
}

export interface AuthenticatedRequest {
  user: JwtPayload;
}

// ============================================================
// QUEUE TYPES (used in real-time layer)
// ============================================================

export interface QueueEntryWithDetails {
  id: string;
  position: number;
  estimatedWait: number | null;
  checkedIn: boolean;
  joinedAt: Date;
  booking: {
    id: string;
    customerName: string | null;
    customerPhone: string | null;
    serviceName: string | null;
    durationMins: number;
    type: string;
  };
  barber?: {
    id: string;
    name: string;
    photoUrl: string | null;
  } | null;
}

export interface QueueStatus {
  salonId: string;
  totalInQueue: number;
  estimatedWaitMinutes: number;
  queue: QueueEntryWithDetails[];
}

// ============================================================
// AVAILABILITY TYPES
// ============================================================

export interface TimeSlot {
  time: string;         // "09:00"
  datetime: Date;
  available: boolean;
  barberId?: string;
}

export interface AvailabilityResult {
  date: string;         // "2024-10-24"
  slots: {
    morning: TimeSlot[];
    afternoon: TimeSlot[];
    evening: TimeSlot[];
  };
}

// ============================================================
// DASHBOARD STATS TYPES
// ============================================================

export interface DashboardStats {
  todaysBookings: number;
  todaysBookingsChange: number;   // % change vs yesterday
  liveQueueWait: number;          // minutes
  activeBarbers: number;
  totalBarbers: number;
  dailyRevenue: number;
}

export interface AdminStats {
  totalSalons: number;
  totalSalonsChange: number;
  totalBookings: number;
  totalBookingsChange: number;
  monthlyRevenue: number;
  monthlyRevenueChange: number;
  activeSalonsToday: number;
  utilizationRate: number;
}
