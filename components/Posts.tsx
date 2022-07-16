import ArrowRightIcon from '@svg/arrow-right.svg';
import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import { Anchor } from './Anchor';
import { Card } from './Card';

export interface PostsProps {
  posts: Array<Post>;
}

export const Posts: FC<PostsProps> = ({ posts }) => (
  <div className="grid gap-12 lg:grid-cols-3">
    {posts.map((post) => (
      <Card
        key={post._id}
        tags={post.tags}
        title={post.title}
        subTitle={dayjs.utc(post.published).format('MMM Do, YYYY')}
        content={post.description}
        actions={[
          <Link key={`${post._id}-action`} href={post.slug} passHref>
            <Anchor className="text-basic-1">
              <span className="flex gap-2">
                Read More
                <ArrowRightIcon width={25} height={25} />
              </span>
            </Anchor>
          </Link>,
        ]}
      />
    ))}
  </div>
);
