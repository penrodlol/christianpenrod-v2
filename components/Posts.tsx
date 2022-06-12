import ArrowRightIcon from '@svg/arrow-right.svg';
import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';
import { Box } from './Box';
import { Card } from './Card';

export interface PostsProps {
  posts: Array<Post>;
}

export const Posts: FC<PostsProps> = ({ posts }) => (
  <Box
    gridContainer
    gridTemplateColumns={{ lg: 'repeat(3, minmax(0, 1fr))' }}
    gap="8"
  >
    {posts.map((post) => (
      <Card
        key={post._id}
        tags={post.tags}
        title={post.title}
        subTitle={dayjs(post.published).format('MMM Do, YYYY')}
        content={post.description}
        actions={[
          <Link key={`${post._id}-action`} href={post.url} passHref>
            <Anchor>
              <Box as="span" flexContainer gap="2">
                Read More
                <ArrowRightIcon width={25} height={25} />
              </Box>
            </Anchor>
          </Link>,
        ]}
      />
    ))}
  </Box>
);
