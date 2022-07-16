import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { sortedPosts } from '@utils/contentlayer';
import { Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-fluid-6">
        <section>
          <Hero />
        </section>
        <section className="flex flex-col gap-fluid-2">
          <h3 className="text-fluid-5 text-gray-2">Recent Posts</h3>
          <Posts posts={posts} />
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  const posts = sortedPosts.filter((_, index) => index < 3);
  return { props: { posts } };
};

export default Home;
