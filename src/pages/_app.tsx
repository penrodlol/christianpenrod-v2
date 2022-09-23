import env from '@env/client';
import { AppRouter } from '@server/routers/_app';
import { withTRPC } from '@trpc/next';
import PlausibleProvider from 'next-plausible';
import type { AppType } from 'next/dist/shared/lib/utils';
import '../styles/globals.scss';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain={env.URL as string}>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default withTRPC<AppRouter>({
  config: () => ({ url: `/api/trpc` }),
  ssr: false,
})(MyApp);
