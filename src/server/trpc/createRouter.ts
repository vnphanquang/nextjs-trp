import * as trpc from '@trpc/server';
import type { OpenApiMeta } from 'trpc-openapi';

import { Context } from '$server/trpc/context';

/**
 * Helper function to create a router with context
 */
export function createRouter() {
  return trpc.router<Context, OpenApiMeta>();
}
