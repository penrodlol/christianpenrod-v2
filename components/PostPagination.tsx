import ArrowLeftIcon from '@svg/arrow-left.svg';
import ArrowRightIcon from '@svg/arrow-right.svg';
import { Post } from 'contentlayer/generated';
import Link from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';
import { Box } from './Box';
import { Text } from './Text';

export interface PostPaginationProps {
  prev: Partial<Post> | null;
  next: Partial<Post> | null;
}

export const PostPagination: FC<PostPaginationProps> = ({ prev, next }) => (
  <Box flexContainer gap="2" justifyContent="space-between">
    {prev && (
      <Box maxWidth="50%">
        <Link href={prev.slug!} passHref>
          <Anchor color="text.1">
            <Box flexContainer flexDirection="column" gap="2">
              <Box flexContainer gap="2" alignItems="center" color="brand.1">
                <ArrowLeftIcon width={30} height={30} />
                <Text color="accent.2" fontSize="3">
                  Prev
                </Text>
              </Box>
              <Text fontSize="fluid.3">{prev.title}</Text>
            </Box>
          </Anchor>
        </Link>
      </Box>
    )}
    {next && (
      <Box maxWidth="50%">
        <Link href={next.slug!} passHref>
          <Anchor color="text.1">
            <Box flexContainer flexDirection="column" gap="2">
              <Box
                alignSelf="end"
                flexContainer
                gap="2"
                alignItems="center"
                color="brand.1"
              >
                <Text color="accent.2" fontSize="3">
                  Next
                </Text>
                <ArrowRightIcon width={30} height={30} />
              </Box>
              <Text fontSize="fluid.3" textAlign="right">
                {next.title}
              </Text>
            </Box>
          </Anchor>
        </Link>
      </Box>
    )}
  </Box>
);
