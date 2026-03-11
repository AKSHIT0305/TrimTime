// src/db/base.repository.ts
// ============================================================
// Base Repository
// Provides common patterns (paginate, transaction wrapper)
// that all feature repositories extend.
// ============================================================

import { PrismaClient } from '../generated/prisma';
import { prisma } from '../lib/prisma';
import { PaginationMeta } from '../types';

export interface PaginateOptions {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export abstract class BaseRepository {
  protected readonly db: PrismaClient;

  constructor(client?: PrismaClient) {
    this.db = client ?? prisma;
  }

  // ---------------------------------------------------------------------------
  // Paginate helper — wraps a count + findMany pair
  // ---------------------------------------------------------------------------
  protected async paginate<T>(
    countFn: () => Promise<number>,
    findFn: (args: { skip: number; take: number }) => Promise<T[]>,
    options: PaginateOptions = {},
  ): Promise<PaginatedResult<T>> {
    const page = Math.max(1, options.page ?? 1);
    const limit = Math.min(100, Math.max(1, options.limit ?? 20));
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
      countFn(),
      findFn({ skip, take: limit }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Transaction wrapper — passes a transactional Prisma client to the callback
  // ---------------------------------------------------------------------------
  protected async withTransaction<T>(
    fn: (tx: Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>) => Promise<T>,
  ): Promise<T> {
    return this.db.$transaction(fn);
  }
}
