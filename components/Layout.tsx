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
        marginTop="clamp(1.31rem, calc(-0.52rem + 9.15vw), 6.00rem)"
        marginBottom="8"
        paddingX="fluid.5"
      >
        {children}
      </Box>
    </Box>
  );
};
