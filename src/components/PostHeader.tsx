import CalendarIcon from '@svg/calendar.svg';
import ClockIcon from '@svg/clock.svg';
import { GetPost } from '@utils/contentlayer';
import { FC } from 'react';

export interface PostHeaderProps {
  post: GetPost;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => (
  <div className="flex flex-col sm:flex-row justify-between bg-2 rounded-md elevation-10">
    <div className="p-fluid-3 sm:self-center">
      <h1 className="text-2xl">{post.title}</h1>
    </div>
    <div className="bg-3 rounded-md m-1 shrink-0">
      <div className="flex flex-col gap-6 justify-center p-fluid-3 h-full">
        <div className="flex items-center gap-4 text-brand-2">
          <CalendarIcon width={25} height={25} />
          <span className="text-base text-1">{post.published}</span>
        </div>
        <div className="flex items-center gap-4 text-brand-2">
          <ClockIcon width={25} height={25} />
          <span className="text-base text-1">
            {post.readingTime} Minute Read
          </span>
        </div>
      </div>
    </div>
  </div>
);
