import { Line } from '@ui/Line';
import { getPost } from '@utils/contentlayer/posts';
import { allPosts } from 'contentlayer/generated';
import { Header } from './Header';
import { MDX } from './Mdx';
import { Pagination } from './Pagination';
import { Repo } from './Repo';
import { SubHeaderIntroduction } from './SubHeader';
import { Toc } from './Toc';
import { Views } from './Views';

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug }));

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);

  return (
    <div className="flex gap-28">
      <article className="my-0 min-w-0 max-w-screen-md">
        <Header post={post} />
        <div className="mx-auto mt-fluid-5 flex flex-col gap-12 px-fluid-1">
          <MDX content={post.body.code} />
          {/* @ts-expect-error Server Component */}
          {post.repo && <Repo name={post.repo} />}
          <div className="self-end">
            {/* @ts-expect-error Server Component */}
            <Views slug={params.slug} />
          </div>
          <Line />
          <Pagination prev={post.prev} next={post.next} />
        </div>
      </article>
      <div>
        <SubHeaderIntroduction />
        <div className="sticky top-28 hidden self-start xl:block">
          <Toc headings={post.headings} />
        </div>
      </div>
    </div>
  );
};

export default BlogSlugPage;
