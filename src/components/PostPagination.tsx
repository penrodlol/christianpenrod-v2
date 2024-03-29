import { GetPost } from '@utils/contentlayer/posts';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';

export interface PostPaginationProps {
  prev: GetPost['prev'];
  next: GetPost['next'];
}

export const PostPagination: FC<PostPaginationProps> = ({ prev, next }) => (
  <div className="flex gap-2 justify-between">
    {prev && (
      <div className={next ? 'max-w-[50%]' : 'max-w-[75%]'}>
        <Link href={prev.slug} passHref>
          <Anchor aria-label={`Previous post: ${prev.title}`}>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-brand-2">
                <ArrowLeft className="w-7 h-7" strokeWidth="3" />
                <span className="text-accent-2 text-lg">Prev</span>
              </div>
              <span className="text-lg">{prev.title}</span>
            </div>
          </Anchor>
        </Link>
      </div>
    )}
    {next && (
      <div className={`ml-auto ${prev ? 'max-w-[50%]' : 'max-w-[75%]'}`}>
        <Link href={next.slug} passHref>
          <Anchor aria-label={`Next post: ${next.title}`}>
            <div className="flex flex-col gap-2">
              <div className="self-end flex gap-2 items-center text-brand-2">
                <span className="text-accent-2 text-lg">Next</span>
                <ArrowRight className="w-7 h-7" strokeWidth="3" />
              </div>
              <span className="text-lg text-right">{next.title}</span>
            </div>
          </Anchor>
        </Link>
      </div>
    )}
  </div>
);
