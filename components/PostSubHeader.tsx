import LinkIcon from '@svg/link.svg';
import HashLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Text } from './Text';

export const PostSubHeader = ({
  id,
  children,
}: PropsWithChildren<HTMLElement>) => {
  return (
    <Wrapper id={id} position="relative" mt="fluid.4">
      <HashLink href={{ hash: id }} passHref>
        <Box
          as="a"
          color="brand.1"
          position="absolute"
          left="-40px"
          top="13px"
          opacity="0"
          paddingRight="3"
        >
          <LinkIcon width={30} height={30} />
        </Box>
      </HashLink>
      <Text as="h2" color="accent.2" fontSize="fluid.6">
        {children}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  &:hover ${Box} {
    animation: var(--animation-fade-in) forwards;
  }
`;
