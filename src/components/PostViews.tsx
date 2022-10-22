import EyeIcon from '@svg/eye.svg';
import { GetPost } from '@utils/contentlayer';
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
    <div className="flex gap-2 items-center bg-2 rounded-md elevation-10 text-brand-2 py-3 px-5">
      <EyeIcon width={25} height={25} />
      <span className="text-1 text-base tracking-widest">
        {String(views ?? 0).padStart(6, '0')}
      </span>
    </div>
  );
};
