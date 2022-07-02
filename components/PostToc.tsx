import { Post } from 'contentlayer/generated';
import HashLink from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';
import { Box } from './Box';
import { Line } from './Line';
import { Text } from './Text';

export interface PostTocProps {
  post: Post;
}

export const PostToc: FC<PostTocProps> = ({ post }) => (
  <Box as="aside">
    <Text as="h3" fontSize="4">
      Table of Contents
    </Text>
    <Line />
    <Box as="nav" display="flex" flexDirection="column" gap="3">
      {post.headings.map((heading: string, index: number) => (
        <HashLink
          key={heading}
          href={{ hash: heading.toLowerCase().replace(/ /g, '-') }}
          passHref
        >
          <Anchor color="text.2">
            {index + 1}. {heading}
          </Anchor>
        </HashLink>
      ))}
    </Box>
  </Box>
);
