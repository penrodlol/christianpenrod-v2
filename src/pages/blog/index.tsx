import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { GetSortedPosts, getSortedPosts } from '@utils/contentlayer';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  posts: GetSortedPosts;
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <Layout title="Blog" subTitle="What has Christian wrote?">
    <section>
      <Posts posts={posts} />
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps<StaticProps> = () => {
  return { props: { posts: getSortedPosts() } };
};

export default Blog;
