import { Line } from '@ui/Line';
import { readdirSync } from 'fs';
import path from 'path';
import { Views } from './Views';

export const generateStaticParams = async () => {
  const posts = readdirSync(path.join(process.cwd(), 'content', 'posts'));
  return posts.map((post) => ({ slug: post.replace(/\.mdx$/, '') }));
};

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex gap-28">
      <article className="my-0 min-w-0 max-w-screen-md">
        {/* <Header post={post} /> */}
        <div className="mx-auto mt-fluid-5 flex flex-col gap-12 px-fluid-1">
          {/* <MDX content={post.body.code} /> */}
          {/* {repo && <Repo repo={repo} />} */}
          <div className="self-end">
            {/* @ts-expect-error Server Component */}
            <Views slug={params.slug} />
          </div>
          <Line />
          {/* <Pagination prev={post.prev} next={post.next} /> */}
        </div>
      </article>
      {/* {post.headings && (
        <>
          <SubHeaderIntroduction />
          <div className="sticky top-28 hidden self-start xl:block">
            <Toc headings={post.headings} />
          </div>
        </>
      )} */}
    </div>
  );
};

export default BlogSlugPage;
