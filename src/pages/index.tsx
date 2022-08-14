import { Bio } from '@components/Bio';
import { Contact } from '@components/Contact';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { Posts } from '@components/Posts';
import { sortedPosts } from '@utils/contentlayer';
import { bio, Bio as _Bio, Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  bio: _Bio;
  posts: Array<Post>;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  bio,
  posts,
}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-fluid-6">
        <div className="flex flex-col md:flex-row gap-fluid-7">
          <section>
            <h1 className="text-fluid-8">Hi, I&apos;m Christian.</h1>
            <h3 className="text-base-2 text-fluid-5">
              Front-End Web Developer
            </h3>
            <Line className="h-2 my-8" />
            <Bio bio={bio} />
            <div className="mt-fluid-5 xl:max-w-max">
              <Contact />
            </div>
          </section>
          <section></section>
        </div>
        <section className="flex flex-col gap-fluid-2">
          <h3 className="text-fluid-5 text-base-2">Recent Posts</h3>
          <Posts posts={posts} />
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = sortedPosts.filter((_, index) => index < 3);

  return { props: { bio, posts } };
};

export default Home;
