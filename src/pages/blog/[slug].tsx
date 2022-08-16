import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { PostGithub } from '@components/PostGithub';
import { PostHeader } from '@components/PostHeader';
import { PostPagination } from '@components/PostPagination';
import { PostSubHeaderIntroduction } from '@components/PostSubHeader';
import { PostToc } from '@components/PostToc';
import { PostViews } from '@components/PostViews';
import { getPaginatedPost, sortedPosts } from '@utils/contentlayer';
import { allPosts, Post } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

interface StaticProps {
  post: Post;
  prev: Partial<Post> | null;
  next: Partial<Post> | null;
}

// prettier-ignore
const components = {
  p: ({children}: PropsWithChildren) => <p className='text-fluid-3 leading-9'>{children}</p>,
  em: ({children}: PropsWithChildren) => <em className='not-italic font-fancy'>{children}</em>,
  a: dynamic<any>(() => import('@components/Anchor').then(m => m.Anchor)),
  h2: dynamic<any>(() => import('@components/PostSubHeader').then(m => m.PostSubHeader)),
  pre: dynamic<any>(() => import('@components/PostCode').then(m => m.PostCode)),
  blockquote: dynamic<any>(() => import('@components/PostNote').then(m => m.PostNote)),
  ol: dynamic<any>(() => import('@components/PostOrderedList').then(m => m.PostOrderedList)),
  Tabs: dynamic<any>(() => import('@components/PostTabs').then(m => m.PostTabs)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  prev,
  next,
}) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout title={post.title} description={post.description} tabOnly>
      <div className="flex gap-28">
        <article className="max-w-screen-md min-w-0 my-0">
          <PostHeader post={post} />
          <div className="flex flex-col gap-12 mt-fluid-5 mx-auto px-fluid-1">
            <MDXContent components={components} />
            {post.repo && <PostGithub name={post.repo} />}
            <div className="self-end">
              <PostViews slug={post.slug} />
            </div>
            <Line />
            <PostPagination prev={prev} next={next} />
          </div>
        </article>
        {post.headings && (
          <>
            <PostSubHeaderIntroduction />
            <div className="sticky top-28 self-start hidden xl:block">
              <PostToc post={post} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: allPosts.map((p) => `/blog/${p.slug}`), fallback: false };
};

export const getStaticProps: GetStaticProps<StaticProps> = ({ params }) => {
  const post = sortedPosts.find((p) => p.slug.includes(String(params!.slug)))!;
  const prev = getPaginatedPost(post, 'prev');
  const next = getPaginatedPost(post, 'next');

  return { props: { post, prev, next } };
};

export default Blog;
