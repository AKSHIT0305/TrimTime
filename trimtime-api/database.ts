// src/lib/database.ts
// ============================================================
// Database Connection Utilities
// Handles startup health checks and graceful shutdown
// ============================================================

import { prisma } from './prisma';

// ---------------------------------------------------------------------------
// Connect — verify the DB is reachable on application boot
// ---------------------------------------------------------------------------
export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    // Lightweight query to confirm the connection is live
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅  PostgreSQL connected successfully');
  } catch (error) {
    console.error('❌  PostgreSQL connection failed:', error);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// Disconnect — called on process SIGTERM / SIGINT for clean shutdown
// ---------------------------------------------------------------------------
export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  console.log('🔌  PostgreSQL disconnected');
}

// ---------------------------------------------------------------------------
// Health check — used by /api/health endpoint
// ---------------------------------------------------------------------------
export async function checkDatabaseHealth(): Promise<{
  status: 'ok' | 'error';
  latencyMs: number;
  message?: string;
}> {
  const start = Date.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { status: 'ok', latencyMs: Date.now() - start };
  } catch (error) {
    return {
      status: 'error',
      latencyMs: Date.now() - start,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// ---------------------------------------------------------------------------
// Register graceful shutdown handlers
// ---------------------------------------------------------------------------
export function registerShutdownHandlers(): void {
  process.on('SIGINT', async () => {
    await disconnectDatabase();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await disconnectDatabase();
    process.exit(0);
  });

  process.on('uncaughtException', async (error) => {
    console.error('Uncaught exception — shutting down:', error);
    await disconnectDatabase();
    process.exit(1);
  });
}
