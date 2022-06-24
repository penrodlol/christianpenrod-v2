import ClipboardIcon from '@svg/clipboard.svg';
import 'prism-theme-vars/base.css';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Button } from './Button';
import { Text } from './Text';

export const PostCode = ({
  title,
  children,
}: PropsWithChildren<HTMLPreElement>) => (
  <>
    <Text color="text.2">{title}</Text>
    <Wrapper position="relative" borderRadius="2" boxShadow="4" padding="3">
      <Box position="absolute" right="2" top="2" color="text.2" opacity="0.5">
        <Button variant="icon">
          <ClipboardIcon width={30} height={30} />
        </Button>
      </Box>
      <Box as="pre">{children}</Box>
    </Wrapper>
  </>
);

const Wrapper = styled(Box)`
  --prism-font-family: var(--font-serif);
  --prism-font-size: var(--font-size-1);
  --prism-background: hsl(210, 11.1%, 10.6%);
  --prism-foreground: var(--gray-3);
`;
