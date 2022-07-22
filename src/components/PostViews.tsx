import EyeIcon from '@svg/eye.svg';
import { FC } from 'react';
import useSWR from 'swr';

export interface PostViewsProps {
  slug: string;
}

export const PostViews: FC<PostViewsProps> = ({ slug }) => {
  const result = useSWR<number>(
    `/api/post-views/${slug}`,
    (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false },
  );

  return (
    <div className="flex gap-2 items-center bg-surface-2 rounded-md shadow-2 text-brand-1 py-3 px-5">
      <EyeIcon width={25} height={25} />
      <span className="text-base-1 text-xl tracking-widest">
        {String(result.data || 0).padStart(6, '0')}
      </span>
    </div>
  );
};
