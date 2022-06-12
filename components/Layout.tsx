import { PropsWithChildren } from 'react';
import { Box } from './Box';
import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box position="relative" zIndex="2">
      <Header />
      <Box
        as="main"
        maxWidth="xl"
        marginX="auto"
        marginY="clamp(1rem, calc(-2.12rem + 15.61vw), 9rem)"
      >
        {children}
      </Box>
    </Box>
  );
};
