import ArrowRightIcon from '@svg/arrow-right.svg';
import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { FC } from 'react';
import { Box } from './Box';
import { Card } from './Card';
import { Text } from './Text';

export interface RecentPostsProps {
  posts: Array<Post>;
}

export const RecentPosts: FC<RecentPostsProps> = ({ posts }) => (
  <>
    <Text as="h3" fontSize="fluid.5" fontWeight="bold" color="text.2">
      Recent Posts
    </Text>
    <Box
      flexContainer
      flexDirection={{ _: 'column', lg: 'row' }}
      gap="8"
      marginTop="fluid.4"
    >
      {posts.map((post) => (
        <Card
          key={post._id}
          tags={post.tags}
          title={post.title}
          subTitle={dayjs(post.published).format('MMM Do, YYYY')}
          content={post.description}
          actions={[
            <Box key={`${post._id}-action`} flexContainer gap="2">
              Read More
              <ArrowRightIcon width={25} height={25} />
            </Box>,
          ]}
        />
      ))}
    </Box>
  </>
);
