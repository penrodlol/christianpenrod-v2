'use client';

import { NextAnchor } from '@ui/Anchor';
import { GetPost } from '@utils/contentlayer/posts';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FC } from 'react';

export interface PaginationProps {
  prev: GetPost['prev'];
  next: GetPost['next'];
}

export const Pagination: FC<PaginationProps> = ({ prev, next }) => (
  <div className="flex justify-between gap-2">
    {prev && (
      <div className={next ? 'max-w-[50%]' : 'max-w-[75%]'}>
        <NextAnchor
          href={`blog/${prev.slug}`}
          aria-label={`Previous post: ${prev.title}`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-brand-2">
              <ArrowLeft className="h-7 w-7" strokeWidth="3" />
              <span className="text-accent-2 text-lg">Prev</span>
            </div>
            <span className="text-lg">{prev.title}</span>
          </div>
        </NextAnchor>
      </div>
    )}
    {next && (
      <div className={`ml-auto ${prev ? 'max-w-[50%]' : 'max-w-[75%]'}`}>
        <NextAnchor
          href={`blog/${next.slug}`}
          aria-label={`Next post: ${next.title}`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 self-end text-brand-2">
              <span className="text-accent-2 text-lg">Next</span>
              <ArrowRight className="h-7 w-7" strokeWidth="3" />
            </div>
            <span className="text-right text-lg">{next.title}</span>
          </div>
        </NextAnchor>
      </div>
    )}
  </div>
);
