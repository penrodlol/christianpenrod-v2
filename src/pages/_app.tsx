import { trpc } from '@utils/trpc';
import { AppType } from 'next/app';
import '../styles/globals.scss';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default trpc.withTRPC(MyApp);
