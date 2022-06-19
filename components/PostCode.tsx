import ClipboardIcon from '@svg/clipboard.svg';
import { PropsWithChildren } from 'react';
import { Box } from './Box';
import { Button } from './Button';

export const PostCode = ({ children }: PropsWithChildren<unknown>) => (
  <Box bg="surface.2" position="relative" borderRadius="2" boxShadow="3">
    <Box position="absolute" right="2" top="2" color="text.2">
      <Button variant="icon">
        <ClipboardIcon width={30} height={30} />
      </Button>
    </Box>
    <Box paddingX="3">
      <code>{children}</code>
    </Box>
  </Box>
);
