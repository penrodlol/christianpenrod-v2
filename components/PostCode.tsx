import ClipboardIcon from '@svg/clipboard.svg';
import { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Box } from './Box';
import { Button } from './Button';
import { Text } from './Text';

export const PostCode = ({
  title,
  children,
}: PropsWithChildren<HTMLPreElement>) => (
  <>
    <Text color="text.2">{title}</Text>
    <Box
      position="relative"
      bg="var(--prism-background)"
      borderRadius="2"
      boxShadow="4"
      padding="3"
    >
      <Box position="absolute" right="2" top="2" color="text.2" opacity="0.5">
        <Button variant="icon">
          <ClipboardIcon width={30} height={30} />
        </Button>
      </Box>
      <Box as="pre">{children}</Box>
    </Box>
  </>
);

export const PostCodeSyntaxHighlighting = createGlobalStyle`  
  :root {
    --prism-font-family: var(--font-serif);
    --prism-font-size: var(--font-size-2);
    --prism-background: hsl(210, 11.1%, 10.6%);
    --prism-foreground: var(--text-2);
    --prism-function: var(--accent-2);
    --prism-keyword: var(--brand-1);
    --prism-string: var(--gray-5);
    --prism-comment: var(--gray-5);
    --prism-interpolation: var(--accent-1);
    --prism-constant: var(--text-2);
    --prism-inline-padding-x: var(--size-2);

    .language-unknown {
      color: var(--accent-2) !important;
      box-decoration-break: clone;
    }

    .language-ts {
      --prism-class: var(--accent-2);
      --prism-builtin: var(--accent-1);
    }

    .language-tsx {
      --prism-builtin: var(--accent-1);
    }

    .language-scss {
      --prism-property: var(--text-2);
      --prism-punctuation: var(--text-2);
      --prism-number: var(--brand-1);
    }

    .language-graphql {
      --prism-property: var(--gray-5);
      --prism-variable: var(--accent-1);
    }
  }
`;
