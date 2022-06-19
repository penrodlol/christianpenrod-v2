import CalendarIcon from '@svg/calendar.svg';
import ClockIcon from '@svg/clock.svg';
import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { FC } from 'react';
import { Box } from './Box';
import { Text } from './Text';

export interface PostHeaderProps {
  post: Post;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => (
  <Box
    flexContainer
    flexDirection={{ _: 'column', md: 'row' }}
    justifyContent="space-between"
    bg="surface.2"
    borderRadius="2"
    boxShadow="4"
  >
    <Box padding="fluid.3" alignSelf={{ md: 'center' }}>
      <Text as="h1" fontSize="fluid.5">
        {post.title}
      </Text>
    </Box>
    <Box bg="surface.3" borderRadius="inherit" margin="1" flexShrink="0">
      <Box
        flexContainer
        flexDirection="column"
        gap="5"
        justifyContent="center"
        padding="6"
        height="100%"
      >
        <Box flexContainer alignItems="center" gap="3" color="brand.1">
          <CalendarIcon width={25} height={25} />
          <Text fontSize="2" color="text.1">
            {dayjs(post.published).format('MMM Do, YYYY')}
          </Text>
        </Box>
        <Box flexContainer alignItems="center" gap="3" color="brand.1">
          <ClockIcon width={25} height={25} />
          <Text fontSize="2" color="text.1">
            {post.readingTime} Minute Read
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
);
