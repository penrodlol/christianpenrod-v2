'use client';

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
  a: dynamic(() => import('@ui/Anchor').then(m => m.Anchor)),
  h2: dynamic(() => import('./SubHeader').then(m => m.SubHeader)),
  pre: dynamic(() => import('./Code').then(m => m.Code)),
  blockquote: dynamic(() => import('./Note').then(m => m.Note)),
  ol: dynamic(() => import('./OrderedList').then(m => m.OrderedList)),
  Tabs: dynamic(() => import('./Tabs').then(m => m.Tabs)),
};

export const MDX: FC<PostMDXProps> = ({ content }) => {
  const MDX = useMDXComponent(content);
  return <MDX components={components} />;
};
