import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../const/theme';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
