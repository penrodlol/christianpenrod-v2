import { Query } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from './Chip';
import { Line } from './Line';

export interface PostsProps {
  posts: Query<'post.get-many'>;
}

export const Posts: FC<PostsProps> = ({ posts }) => (
  <ul className="grid gap-fluid-4 xl:grid-cols-3">
    {posts.map((post) => (
      <li key={post.title}>
        <Link href={`/blog/${post.slug}`} passHref>
          <a
            aria-label={`${post.title}. ${post.description}`}
            className="group h-full relative flex flex-col bg-surface-2 px-6 py-5 rounded-lg shadow-2
                       hover:outline hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
          >
            <div className="flex gap-2 flex-wrap mb-2">
              {post.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            <span className="text-fluid-4 group-hover:text-brand-2 group-focus-visible:text-brand-2">
              {post.title}
            </span>
            <span className="text-base-2 text-lg font-semibold">
              {post.published}
            </span>
            <Line />
            <p className="text-fluid-2 sm:leading-8 leading-7">
              {post.description}
            </p>
          </a>
        </Link>
      </li>
    ))}
  </ul>
);
