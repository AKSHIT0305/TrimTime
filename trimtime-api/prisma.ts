// src/lib/prisma.ts
// ============================================================
// Prisma Client Singleton
//
// In development, Next.js/Node hot-reloading can create multiple
// Prisma Client instances. This pattern stores one instance on
// the Node.js global object to prevent connection pool exhaustion.
// ============================================================

import { PrismaClient } from '../generated/prisma';

// ---------------------------------------------------------------------------
// Type augmentation — attach prisma to the Node global so it survives HMR
// ---------------------------------------------------------------------------
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

// ---------------------------------------------------------------------------
// Client factory with logging configuration
// ---------------------------------------------------------------------------
function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? [
            { level: 'query',  emit: 'event'  }, // Emits for performance monitoring
            { level: 'warn',   emit: 'stdout' },
            { level: 'error',  emit: 'stdout' },
          ]
        : [
            { level: 'warn',  emit: 'stdout' },
            { level: 'error', emit: 'stdout' },
          ],
    errorFormat: process.env.NODE_ENV === 'development' ? 'pretty' : 'minimal',
  });
}

// ---------------------------------------------------------------------------
// Singleton export
// ---------------------------------------------------------------------------
export const prisma: PrismaClient =
  global.__prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma;
}

// ---------------------------------------------------------------------------
// Optional: Log slow queries in development
// ---------------------------------------------------------------------------
if (process.env.NODE_ENV === 'development') {
  // @ts-expect-error — Prisma event typing requires $on cast
  prisma.$on('query', (e: { query: string; duration: number }) => {
    if (e.duration > 200) {
      console.warn(`[Prisma SLOW QUERY] ${e.duration}ms\n${e.query}`);
    }
  });
}

export default prisma;
