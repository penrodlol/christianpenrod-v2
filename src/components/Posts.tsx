import { QPost } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from './Chip';
import { Line } from './Line';

export interface PostsProps {
  posts: QPost<'getMany'>;
}

export const Posts: FC<PostsProps> = ({ posts }) => (
  <ul className="grid gap-fluid-4 lg:grid-cols-3">
    {posts.map((post) => (
      <li key={post.title}>
        <Link href={`/blog/${post.slug}`} passHref>
          <a
            aria-label={`${post.title}. ${post.description}`}
            className="group h-full relative flex flex-col bg-2 px-6 py-5 rounded-lg elevation-8
                       hover:outline hover:outline-2 hover:outline-offset-4"
          >
            <div className="flex gap-2 flex-wrap mb-2">
              {post.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            <span className="text-lg group-hover:text-brand-2 group-focus-visible:text-brand-2">
              {post.title}
            </span>
            <span className="text-2 text-base font-semibold">
              {post.published}
            </span>
            <Line />
            <p className="text-sm sm:leading-8 leading-relaxed text-2">
              {post.description}
            </p>
          </a>
        </Link>
      </li>
    ))}
  </ul>
);
