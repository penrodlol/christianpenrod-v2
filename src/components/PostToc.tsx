import { GetPost } from '@utils/contentlayer/posts';
import HashLink from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';
import { Line } from './Line';

export interface PostTocProps {
  headings: NonNullable<GetPost['headings']>;
}

export const PostToc: FC<PostTocProps> = ({ headings }) => (
  <aside>
    <h3 className="text-lg">Table of Contents</h3>
    <Line />
    <nav className="flex flex-col gap-4">
      <HashLink href={{ hash: 'introduction' }} passHref>
        <Anchor className="text-2">1. Introduction</Anchor>
      </HashLink>
      {headings.map((heading: string, index: number) => (
        <HashLink
          key={heading}
          href={{ hash: heading.toLowerCase().replace(/ /g, '-') }}
          passHref
        >
          <Anchor className="text-2">
            {index + 2}. {heading}
          </Anchor>
        </HashLink>
      ))}
    </nav>
  </aside>
);
