import { GetPost } from '@utils/contentlayer/posts';
import { Eye } from 'lucide-react';
import { FC } from 'react';
import useSWR from 'swr';

export interface PostViewsProps {
  slug: GetPost['slug'];
}

export const PostViews: FC<PostViewsProps> = ({ slug }) => {
  const { data: views } = useSWR<number>(
    `/api/views/${slug}`,
    (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false },
  );

  return (
    <div
      className="flex gap-2 items-center bg-2 rounded-md elevation-10 text-brand-2 py-3 px-5"
      onClick={async () => fetch(`/api/post/like/${slug}`, { method: 'POST' })}
    >
      <Eye className="w-6 h-6 stroke-brand-2" strokeWidth="3" />
      <span className="text-1 text-base tracking-widest">
        {String(views ?? 0).padStart(6, '0')}
      </span>
    </div>
  );
};
