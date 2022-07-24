import TrendingUpIcon from '@svg/trending-up.svg';
import { Chip } from './Chip';
import { Line } from './Line';

export const CommitSummary = () => {
  return (
    <div>
      <div className="bg-surface-1 rounded-md shadow-2 py-6 px-12">
        <h2 className="flex gap-2 items-center text-3xl">
          Last Month Commit History
          <TrendingUpIcon className="fill-base-2" width={30} height={30} />
        </h2>
        <Line />
        <div className="flex gap-8 text-xl mt-8">
          <div className="flex flex-col gap-2 text-base-2">
            <span>Total Commits:</span>
            <span>Top Language:</span>
          </div>
          <div className="flex flex-col gap-2 text-brand-1">
            <span>123</span>
            <span>Typescript</span>
          </div>
        </div>
        <div className="mt-8 flex gap-3 justify-center">
          {['Next.js', 'Angular', 'Netlify', 'Browser Extension'].map(
            (topic) => (
              <Chip key={topic}>{topic}</Chip>
            ),
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};
