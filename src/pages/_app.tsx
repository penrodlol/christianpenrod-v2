import '@fontsource/nunito';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/800.css';
import '@fontsource/sriracha';
import { AppType } from 'next/app';
import 'prism-theme-vars/base.css';
import 'tailwindcss/tailwind.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
