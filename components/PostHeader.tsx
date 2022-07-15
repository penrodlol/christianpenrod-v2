import CalendarIcon from '@svg/calendar.svg';
import ClockIcon from '@svg/clock.svg';
import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { FC } from 'react';

export interface PostHeaderProps {
  post: Post;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => (
  <div className="flex flex-col md:flex-row justify-between bg-surface-2 rounded-2 shadow-4">
    <div className="p-fluid-3 md:self-center">
      <h1 className="text-fluid-5">{post.title}</h1>
    </div>
    <div className="bg-surface-3 rounded-2 m-1 shrink-0">
      <div className="flex flex-col gap-5 justify-center p-fluid-3 h-full">
        <div className="flex items-center gap-3 text-brand-1">
          <CalendarIcon width={25} height={25} />
          <span className="text-2 text-basic-1">
            {dayjs(post.published).format('MMM Do, YYYY')}
          </span>
        </div>
        <div className="flex items-center gap-3 text-brand-1">
          <ClockIcon width={25} height={25} />
          <span className="text-2 text-basic-1">
            {post.readingTime} Minute Read
          </span>
        </div>
      </div>
    </div>
  </div>
);
