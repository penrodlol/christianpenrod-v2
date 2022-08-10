import { Contact } from '@components/Contact';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { Posts } from '@components/Posts';
import ArrowRightIcon from '@svg/arrow-right.svg';
import { sortedPosts } from '@utils/contentlayer';
import { bio, Bio, Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

interface StaticProps {
  bio: Bio;
  posts: Array<Post>;
}

// prettier-ignore
const components = {
  a: dynamic<any>(() => import('@components/Anchor').then((m) => m.Anchor)),
  ul: ({ children }: PropsWithChildren) => (<ul className="flex flex-col gap-1">{children}</ul>),
  li: ({ children }: PropsWithChildren) => (
    <li className="flex gap-2 items-center text-fluid-3">
      <ArrowRightIcon width={20} height={20} className="fill-accent-2 min-w-[20px]" />
      <p>{children}</p>
    </li>
  ),
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  bio,
  posts,
}) => {
  const BioMDX = useMDXComponent(bio.body.code);

  return (
    <Layout>
      <div className="flex flex-col gap-fluid-6">
        <section className="flex flex-col md:flex-row gap-fluid-7">
          <div>
            <h1 className="text-fluid-8">Hi, I&apos;m Christian.</h1>
            <h3 className="text-base-2 text-fluid-5">
              Front-End Web Developer
            </h3>
            <Line className="h-2 my-8" />
            <BioMDX components={components} />
            <div className="mt-fluid-5 xl:max-w-max">
              <Contact />
            </div>
          </div>
          <div className="mx-auto"></div>
        </section>
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
