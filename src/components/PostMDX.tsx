import { GetPost } from '@utils/contentlayer/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

export interface PostMDXProps {
  content: GetPost['body']['code'];
}

// prettier-ignore
const components = {
  p: ({children}: PropsWithChildren) => <p className='text-base !leading-9'>{children}</p>,
  em: ({children}: PropsWithChildren) => <em className='not-italic font-fancy'>{children}</em>,
  a: dynamic(() => import('@components/Anchor').then(m => m.Anchor)),
  h2: dynamic(() => import('@components/PostSubHeader').then(m => m.PostSubHeader)),
  pre: dynamic(() => import('@components/PostCode').then(m => m.PostCode)),
  blockquote: dynamic(() => import('@components/PostNote').then(m => m.PostNote)),
  ol: dynamic(() => import('@components/PostOrderedList').then(m => m.PostOrderedList)),
  Tabs: dynamic(() => import('@components/PostTabs').then(m => m.PostTabs)),
};

export const PostMDX: FC<PostMDXProps> = ({ content }) => {
  const MDX = useMDXComponent(content);
  return <MDX components={components} />;
};
