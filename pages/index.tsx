import { Box } from '@components/Box';
import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';
import { RecentPosts } from '@components/RecentPosts';
import { allPosts, Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <Box margin="0 auto" maxWidth={{ _: 'max-content', lg: 'unset' }}>
        <Box as="section">
          <Hero />
        </Box>
        <Box as="section" marginTop="fluid.8">
          <RecentPosts posts={posts} />
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = [...allPosts]
    .sort((a, b) => dayjs(b.published).valueOf() - dayjs(a.published).valueOf())
    .filter((_, index) => index < 3);

  return { props: { posts } };
};

export default Home;
