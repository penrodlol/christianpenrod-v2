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
        <section>
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
