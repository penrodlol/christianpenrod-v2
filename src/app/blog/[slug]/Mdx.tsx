'use client';

import { Anchor, AnchorProps } from '@ui/Anchor';
import { GetPost } from '@utils/contentlayer/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';
import { Code, CodeProps } from './Code';
import { Note, NoteProps } from './Note';
import { OrderedList, OrderedListProps } from './OrderedList';
import { SubHeader, SubHeaderProps } from './SubHeader';
import { Tabs, TabsProps } from './Tabs';

export interface MDXProps {
  content: GetPost['body']['code'];
}

export const MDX: FC<MDXProps> = ({ content }) => {
  const MDX = useMDXComponent(content);
  return (
    <MDX
      components={{
        p: ({ children }) => <p className="!leading-9 text-base">{children}</p>,
        em: ({ children }) => <em className="font-fancy">{children}</em>,
        a: (props: AnchorProps) => <Anchor {...props} />,
        h2: (props: SubHeaderProps) => <SubHeader {...props} />,
        pre: (props: CodeProps) => <Code {...props} />,
        blockquote: (props: NoteProps) => <Note {...props} />,
        ol: (props: OrderedListProps) => <OrderedList {...props} />,
        Tabs: (props: TabsProps) => <Tabs {...props} />,
      }}
    />
  );
};
