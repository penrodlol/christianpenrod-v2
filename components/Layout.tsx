import { PropsWithChildren } from 'react';
import { Box } from './Box';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box as="main" position="relative" zIndex="2">
      {children}
    </Box>
  );
};
