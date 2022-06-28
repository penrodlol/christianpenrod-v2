import { Box } from '@components/Box';
import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { Text } from '@components/Text';
import { sortedPosts } from '@utils/contentlayer';
import { Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <Box as="section">
        <Hero />
      </Box>
      <Box as="section" marginTop="fluid.6">
        <Text as="h3" fontSize="fluid.5" fontWeight="bold" color="text.2">
          Recent Posts
        </Text>
        <Box marginTop="fluid.2">
          <Posts posts={posts} />
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = sortedPosts.filter((_, index) => index < 3);
  return { props: { posts } };
};

export default Home;
