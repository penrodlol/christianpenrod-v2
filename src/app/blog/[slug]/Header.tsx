'use client';

import { GetPost } from '@lib/contentlayer/posts';
import { Calendar, Clock } from 'lucide-react';
import { FC } from 'react';

export interface HeaderProps {
  post: GetPost;
}

export const Header: FC<HeaderProps> = ({ post }) => (
  <div className="flex flex-col justify-between rounded-md bg-2 elevation-10 sm:flex-row">
    <div className="p-fluid-3 sm:self-center">
      <h1 className="text-2xl">{post.title}</h1>
    </div>
    <div className="m-1 shrink-0 rounded-md bg-3">
      <div className="flex h-full flex-col justify-center gap-6 p-fluid-3">
        <div className="flex items-center gap-4 text-brand-2">
          <Calendar className="h-6 w-6" strokeWidth="3" />
          <span className="text-1 text-base">{post.published}</span>
        </div>
        <div className="flex items-center gap-4 text-brand-2">
          <Clock className="h-6 w-6" strokeWidth="3" />
          <span className="text-1 text-base">
            {post.readingTime} Minute Read
          </span>
        </div>
      </div>
    </div>
  </div>
);
