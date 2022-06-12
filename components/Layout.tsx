import { PropsWithChildren } from 'react';
import { Box } from './Box';
import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box position="relative" zIndex="2">
      <Header />
      <Box as="main" maxWidth="xl" marginX="auto" marginY="fluid.8">
        {children}
      </Box>
    </Box>
  );
};
