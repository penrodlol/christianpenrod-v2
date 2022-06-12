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
        marginTop="clamp(1rem, calc(-2.12rem + 15.61vw), 9rem)"
        marginBottom="8"
        paddingX="fluid.5"
      >
        {children}
      </Box>
    </Box>
  );
};
