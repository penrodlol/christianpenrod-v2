import EyeIcon from '@svg/eye.svg';

export const PostViews = () => (
  <div className="flex gap-2 items-center bg-surface-2 rounded-2 shadow-3 text-brand-1  py-2 px-4">
    <EyeIcon width={25} height={25} />
    <span className="text-basic-1 text-3 tracking-4">
      {String(153).padStart(6, '0')}
    </span>
  </div>
);
