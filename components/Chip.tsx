import { PropsWithChildren } from 'react';
import { Box } from './Box';
import { Text } from './Text';

export const Chip = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box bg="accent.2" color="surface.1" borderRadius="round" paddingX="2">
      <Text letterSpacing="2" lineHeight="4" fontSize="0.9rem">
        {children}
      </Text>
    </Box>
  );
};
