import { PropsWithChildren } from 'react';
import { Box } from './Box';
import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box position="relative" zIndex="2">
      <Header />
      <main> {children}</main>
    </Box>
  );
};
