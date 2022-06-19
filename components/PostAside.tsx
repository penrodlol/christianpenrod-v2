import { PropsWithChildren } from 'react';
import { Box } from './Box';

export const PostAside = ({ children }: PropsWithChildren<unknown>) => (
  <Box
    as="aside"
    flexContainer
    flexDirection="column"
    gap="5"
    bg="surface.2"
    padding="4"
    borderRadius="2"
    boxShadow="3"
    borderLeft="solid var(--size-2) var(--brand-1)"
  >
    {children}
  </Box>
);
