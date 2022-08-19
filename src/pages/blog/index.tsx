import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { sortedPosts } from '@utils/contentlayer';
import { Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout title="Blog" subTitle="What has Christian wrote?">
      <section>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  return { props: { posts: sortedPosts } };
};

export default Blog;
