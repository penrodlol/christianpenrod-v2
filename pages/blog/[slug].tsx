import { Box } from '@components/Box';
import { Layout } from '@components/Layout';
import { PostHeader } from '@components/PostHeader';
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
      <Box as="section" maxWidth="md" margin="0 auto">
        <PostHeader post={post} />
        <Box marginY="fluid.5">
          <MDXContent />
        </Box>
      </Box>
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
