import { Box } from '@components/Box';
import { Layout } from '@components/Layout';
import { PostCodeSyntaxHighlighting } from '@components/PostCode';
import { PostHeader } from '@components/PostHeader';
import { PostToc } from '@components/PostToc';
import { Text } from '@components/Text';
import { allPosts, Post } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';
import 'prism-theme-vars/base.css';
import styled from 'styled-components';

// prettier-ignore
const components = {
  p: styled(Text).attrs({ as: 'p', fontSize: '3', lineHeight: 4 })``,
  em: styled(Text).attrs({ as: 'em', variant: 'fancy' })``,
  a: dynamic<any>(() => import('@components/Anchor').then(m => m.Anchor)),
  h2: dynamic<any>(() => import('@components/PostSubHeader').then(m => m.PostSubHeader)),
  pre: dynamic<any>(() => import('@components/PostCode').then(m => m.PostCode)),
  blockquote: dynamic<any>(() => import('@components/PostNote').then(m => m.PostNote)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <Box as="section" flexContainer gap="10" position="relative">
        <Box as="article" maxWidth="md" margin="0 auto">
          <PostHeader post={post} />
          <PostCodeSyntaxHighlighting />
          <Box
            flexContainer
            flexDirection="column"
            gap="8"
            marginY="fluid.5"
            marginX="auto"
            maxWidth="max-content"
          >
            <MDXContent components={components} />
          </Box>
        </Box>
        {post.headings && <PostToc post={post} />}
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
