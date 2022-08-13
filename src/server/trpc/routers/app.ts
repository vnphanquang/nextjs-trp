/**
 * This file contains the root router of your tRPC-backend
 */
import superjson from 'superjson';
import { z } from 'zod';

import { createRouter } from '../createRouter';

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * See more: {@link https://trpc.io/docs/ssg ssg},
 * {@link https://trpc.io/docs/router router}
 */
export const appRouter = createRouter()
  /**
   * Add data transformers.
   * See {@link https://trpc.io/docs/data-transformers data-transformers}
   */
  .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting.
   * See {@link https://trpc.io/docs/error-formatting error-formatting }
   */
  // .formatError(({ shape, error }) => { })
  /**
   * Add a health check endpoint to be called with `/api/trpc/healthz`
   */
  .query('healthz', {
    meta: {
      openapi: {
        enabled: true,
        method: 'GET',
        path: '/healthz',
      },
    },
    input: z.object({}),
    output: z.string(),
    async resolve() {
      return 'yay!';
    },
  });
// /**
//  * Merge `postRouter` under `post.`
//  */
// .merge('post.', customRouter);

export type AppRouter = typeof appRouter;
