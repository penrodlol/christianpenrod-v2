import { Box } from '@components/Box';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { PostCodeSyntaxHighlighting } from '@components/PostCode';
import { PostGithub } from '@components/PostGithub';
import { PostHeader } from '@components/PostHeader';
import { PostPagination } from '@components/PostPagination';
import { PostToc } from '@components/PostToc';
import { PostViews } from '@components/PostViews';
import { Text } from '@components/Text';
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
import 'prism-theme-vars/base.css';
import styled from 'styled-components';

interface StaticProps {
  post: Post;
  prev: Partial<Post> | null;
  next: Partial<Post> | null;
}

// prettier-ignore
const components = {
  p: styled(Text).attrs({ as: 'p', fontSize: '3', lineHeight: 4 })``,
  em: styled(Text).attrs({ as: 'em', variant: 'fancy' })``,
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
            {post.github && <PostGithub github={post.github} />}
            <Box alignSelf="end">
              <PostViews />
            </Box>
            <Line />
            <PostPagination prev={prev} next={next} />
          </Box>
        </Box>
        {post.headings && (
          <Box position="sticky" top="11" alignSelf="flex-start">
            <PostToc post={post} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: allPosts.map((post) => post.slug), fallback: false };
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}) => {
  const post = sortedPosts.find((p) => p.slug.includes(String(params!.slug)))!;
  const prev = getPaginatedPost(post, 'prev');
  const next = getPaginatedPost(post, 'next');

  return { props: { post, prev, next } };
};

export default Blog;
