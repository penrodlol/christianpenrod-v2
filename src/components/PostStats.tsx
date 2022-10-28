import { GetPost } from '@utils/contentlayer/posts';
import { Eye, ThumbsUp } from 'lucide-react';
import { ButtonHTMLAttributes, FC, useCallback } from 'react';
import useSWR from 'swr';

type Stats = { views: number; likes: number; liked: boolean };

export const PostStats: FC<{ slug: GetPost['slug'] }> = ({ slug }) => {
  const { data: stats, mutate: updateLikes } = useSWR<Stats>(
    `/api/post/${slug}`,
    (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false },
  );

  const like = useCallback(async () => {
    if (!stats) return;

    await fetch(`/api/post/like/${slug}`, { method: 'POST' });
    updateLikes(
      { ...stats, liked: true, likes: stats.likes + 1 },
      { revalidate: false },
    );
  }, [slug, stats, updateLikes]);

  return (
    <>
      {stats && (
        <div className="flex gap-2 justify-between items-center">
          {stats.liked ? <Likes {...stats} /> : <LikesButton onClick={like} />}
          <Views {...stats} />
        </div>
      )}
    </>
  );
};

const Views: FC<Stats> = ({ views }) => (
  <div className="flex gap-3 items-center rounded-md elevation-10 bg-2 py-3 px-5">
    <Eye className="w-6 h-6 stroke-brand-2" strokeWidth="3" aria-hidden />
    <span className="text-1 text-base tracking-widest">
      {String(views).padStart(6, '0')}
    </span>
  </div>
);

const Likes: FC<Stats> = ({ likes }) => (
  <div className="flex gap-3 items-center rounded-md elevation-10 bg-2 py-3 px-5">
    <ThumbsUp className="w-6 h-6 stroke-brand-2" strokeWidth="3" aria-hidden />
    <span className="text-1 text-base tracking-widest">{likes}</span>
  </div>
);

const LikesButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    className="group flex gap-3 items-center rounded-md elevation-10 bg-1 py-3 px-5"
    {...props}
  >
    <ThumbsUp
      className="w-6 h-6 stroke-brand-2 group-hover:fill-brand-2"
      strokeWidth="3"
      fillOpacity="0.25"
      aria-hidden
    />
    <span className="text-1 text-base tracking-widest group-hover:text-brand-2">
      Like
    </span>
  </button>
);
