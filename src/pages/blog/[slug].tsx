import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { PostGithub } from '@components/PostGithub';
import { PostHeader } from '@components/PostHeader';
import { PostMDX } from '@components/PostMDX';
import { PostPagination } from '@components/PostPagination';
import { PostSubHeaderIntroduction } from '@components/PostSubHeader';
import { PostToc } from '@components/PostToc';
import { PostViews } from '@components/PostViews';
import { ctx } from '@server/context';
import { router } from '@server/routers/_app';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import { trpc } from '@utils/trpc';
import { allPosts } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

interface StaticProps {
  slug: string;
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
}) => {
  const { data: post } = trpc.post.get.useQuery(slug);

  return (
    <>
      {post && (
        <Layout title={post.title} description={post.description} tabOnly>
          <div className="flex gap-28">
            <article className="max-w-screen-md min-w-0 my-0">
              <PostHeader post={post} />
              <div className="flex flex-col gap-12 mt-fluid-5 mx-auto px-fluid-1">
                <PostMDX content={post.content} />
                {post.repo && <PostGithub name={post.repo} />}
                <div className="self-end">
                  <PostViews slug={post.slug} />
                </div>
                <Line />
                <PostPagination prev={post.prev} next={post.next} />
              </div>
            </article>
            {post.headings && (
              <>
                <PostSubHeaderIntroduction />
                <div className="sticky top-28 self-start hidden xl:block">
                  <PostToc headings={post.headings} />
                </div>
              </>
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: allPosts.map((p) => `/blog/${p.slug}`), fallback: false };
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}) => {
  const ssg = createProxySSGHelpers({ router, ctx: await ctx() });
  const slug = String(params?.slug);

  await ssg.post.get.prefetch(slug);

  return { props: { trpcState: ssg.dehydrate(), slug } };
};

export default Blog;
