import '@fontsource/nunito';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/800.css';
import '@fontsource/sriracha';
import { trpc } from '@utils/trpc';
import { AppType } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default trpc.withTRPC(MyApp);
