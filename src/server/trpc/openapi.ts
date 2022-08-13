import { generateOpenApiDocument } from 'trpc-openapi';

import { AppConfig } from '$config';
import { appRouter } from '$server/trpc/routers/app';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'tRPC OpenAPI',
  version: '1.0.0',
  baseUrl: AppConfig.urls.next.base,
});
