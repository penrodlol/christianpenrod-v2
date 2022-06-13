import { Layout } from '@components/Layout';
import { allPosts, Post } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <h1>{post.title}</h1>
      <MDXContent />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: allPosts.map((post) => post.url), fallback: false };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  const slug = params!.slug as string;
  const post = allPosts.find((p) => p._raw.flattenedPath === slug) as Post;

  return { props: { post } };
};

export default Blog;
