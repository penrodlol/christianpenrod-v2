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
    <div className="flex items-center gap-3 rounded-md bg-2 py-3 px-5 elevation-10">
      <Eye className="h-6 w-6 stroke-brand-2" strokeWidth="3" aria-hidden />
      <span className="tracking-widest text-1 text-base">
        {String(views ?? 0).padStart(6, '0')}
      </span>
    </div>
  );
};
