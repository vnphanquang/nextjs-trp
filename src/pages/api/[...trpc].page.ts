import { createOpenApiNextHandler } from 'trpc-openapi';

import { createContext } from '$server/trpc/context';
import { appRouter } from '$server/trpc/routers/app';

export default createOpenApiNextHandler({ router: appRouter, createContext });
