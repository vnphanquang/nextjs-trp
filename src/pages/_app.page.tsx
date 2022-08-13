import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';

import { AppConfig } from '$config';
import { AppRouter } from '$server/trpc/routers/app';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

console.log('TRPC', AppConfig.urls.next.api.trpc);

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      url: AppConfig.urls.next.api.trpc,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App);
