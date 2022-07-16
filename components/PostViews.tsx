import EyeIcon from '@svg/eye.svg';

export const PostViews = () => (
  <div className="flex gap-2 items-center bg-surface-2 rounded-md shadow-3 text-brand-1 py-3 px-5">
    <EyeIcon width={25} height={25} />
    <span className="text-gray-1 text-xl tracking-widest">
      {String(153).padStart(6, '0')}
    </span>
  </div>
);
