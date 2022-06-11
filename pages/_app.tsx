import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../const/theme';
import '../styles/globals.scss';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
