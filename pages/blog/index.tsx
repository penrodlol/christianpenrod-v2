import { Box } from '@components/Box';
import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { allPosts, Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <Box maxWidth="max-content" margin="0 auto">
        <Posts posts={posts} />
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = [...allPosts].sort(
    (a, b) => dayjs(b.published).valueOf() - dayjs(a.published).valueOf(),
  );

  return { props: { posts } };
};

export default Blog;
