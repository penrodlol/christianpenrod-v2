import ClipboardIcon from '@svg/clipboard.svg';
import 'prism-theme-vars/base.css';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Button } from './Button';

export const PostCode = ({ children }: PropsWithChildren<unknown>) => (
  <Wrapper position="relative" bg="surface.2" borderRadius="2" boxShadow="3">
    <Box position="absolute" right="2" top="2" color="text.2" opacity="0.5">
      <Button variant="icon">
        <ClipboardIcon width={30} height={30} />
      </Button>
    </Box>
    <Box>{children}</Box>
  </Wrapper>
);

const Wrapper = styled(Box)`
  --prism-font-family: var(--font-serif);
  --prism-font-size: var(--font-size-2);
  --prism-background: transparent;
  --prism-foreground: var(--text-1);
`;
