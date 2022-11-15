'use client';

import { GetPost } from '@lib/contentlayer/posts';
import { NextAnchor } from '@ui/Anchor';
import { Line } from '@ui/Line';
import { FC } from 'react';

export interface TocProps {
  headings: NonNullable<GetPost['headings']>;
}

export const Toc: FC<TocProps> = ({ headings }) => (
  <aside>
    <h3 className="text-lg">Table of Contents</h3>
    <Line />
    <nav className="flex flex-col gap-4 text-2">
      <NextAnchor href={{ hash: 'introduction' }}>1. Introduction</NextAnchor>
      {headings.map((heading: string, index: number) => (
        <NextAnchor
          key={heading}
          href={{ hash: heading.toLowerCase().replace(/ /g, '-') }}
        >
          {index + 2}. {heading}
        </NextAnchor>
      ))}
    </nav>
  </aside>
);
