import EyeIcon from '@svg/eye.svg';
import { QPost, trpc } from '@utils/trpc';
import { FC } from 'react';

export interface PostViewsProps {
  slug: QPost<'get'>['slug'];
}

export const PostViews: FC<PostViewsProps> = ({ slug }) => {
  const { data } = trpc.post.getViews.useQuery(slug);

  return (
    <div className="flex gap-2 items-center bg-2 rounded-md shadow-2 text-brand-2 py-3 px-5">
      <EyeIcon width={25} height={25} />
      <span className="text-1 text-xl tracking-widest">
        {String(data?.views ?? 0).padStart(6, '0')}
      </span>
    </div>
  );
};
