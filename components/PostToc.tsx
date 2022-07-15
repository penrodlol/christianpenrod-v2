import { Post } from 'contentlayer/generated';
import HashLink from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';
import { Line } from './Line';

export interface PostTocProps {
  post: Post;
}

export const PostToc: FC<PostTocProps> = ({ post }) => (
  <aside>
    <h3 className="text-4">Table of Contents</h3>
    <Line />
    <nav className="flex flex-col gap-3">
      <HashLink href={{ hash: 'introduction' }} passHref>
        <Anchor className="text-basic-2">1. Introduction</Anchor>
      </HashLink>
      {post.headings.map((heading: string, index: number) => (
        <HashLink
          key={heading}
          href={{ hash: heading.toLowerCase().replace(/ /g, '-') }}
          passHref
        >
          <Anchor className="text-basic-2">
            {index + 2}. {heading}
          </Anchor>
        </HashLink>
      ))}
    </nav>
  </aside>
);
