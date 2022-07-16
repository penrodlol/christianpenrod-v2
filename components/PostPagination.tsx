import ArrowLeftIcon from '@svg/arrow-left.svg';
import ArrowRightIcon from '@svg/arrow-right.svg';
import { Post } from 'contentlayer/generated';
import Link from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';

export interface PostPaginationProps {
  prev: Partial<Post> | null;
  next: Partial<Post> | null;
}

export const PostPagination: FC<PostPaginationProps> = ({ prev, next }) => (
  <div className="flex gap-2 justify-between">
    {prev && (
      <div className={next ? 'max-w-[50%]' : 'max-w-[75%]'}>
        <Link href={prev.slug!} passHref>
          <Anchor>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-brand-1">
                <ArrowLeftIcon width={30} height={30} />
                <span className="text-accent-2 text-xl">Prev</span>
              </div>
              <span className="text-fluid-3">{prev.title}</span>
            </div>
          </Anchor>
        </Link>
      </div>
    )}
    {next && (
      <div className={`ml-auto ${prev ? 'max-w-[50%]' : 'max-w-[75%]'}`}>
        <Link href={next.slug!} passHref>
          <Anchor>
            <div className="flex flex-col gap-2">
              <div className="self-end flex gap-2 items-center text-brand-1">
                <span className="text-accent-2 text-xl">Next</span>
                <ArrowRightIcon width={30} height={30} />
              </div>
              <span className="text-fluid-3 text-right">{next.title}</span>
            </div>
          </Anchor>
        </Link>
      </div>
    )}
  </div>
);
