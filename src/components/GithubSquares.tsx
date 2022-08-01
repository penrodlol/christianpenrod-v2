import { CommitSquare } from '@prisma/client';
import dayjs from 'dayjs';
import { FC, useMemo } from 'react';

const COLORS = new Map<string, string>()
  .set('#ebedf0', 'var(--surface-1)')
  .set('#9be9a8', '#d8cbff')
  .set('#40c463', 'var(--brand-1)')
  .set('#30a14e', 'var(--brand-2)')
  .set('#216e39', '#7b4eff');

export interface GithubSquaresProps {
  squares: Array<CommitSquare>;
  contributions: number;
}

export const GithubSquares: FC<GithubSquaresProps> = ({
  squares,
  contributions,
}) => {
  const chunks = useMemo(
    () =>
      squares.reduce((acc, _, i) => {
        if (i % 7 === 0) acc.push(squares.slice(i, i + 7));
        return acc;
      }, [] as Array<typeof squares>),
    [squares],
  );

  return (
    <div className="bg-surface-2 rounded-md shadow-2 p-5 max-w-3xl mx-auto">
      <svg
        width="744"
        height="120"
        viewBox="0 0 744 120"
        className="block max-w-full h-auto"
      >
        {chunks.map((chunk, i) => (
          <g key={i} transform={`translate(${i === 0 ? i : i * 14}, 0)`}>
            {chunk.map((square, j) => (
              <rect
                key={square.id}
                className="w-3 h-3"
                x={0}
                y={j === 0 ? j : j * 14}
                fill={COLORS.get(square.color)}
                rx="2"
                ry="2"
              >
                <title>
                  <>
                    {square.count} contribution(s) on{' '}
                    {dayjs(square.date).format('MMM Do, YYYY')}
                  </>
                </title>
              </rect>
            ))}
          </g>
        ))}
      </svg>
      <div className="flex gap-1 items-center justify-between font-semibold">
        <p>
          <span className="font-bold text-brand-1">{contributions}</span>{' '}
          contributions in the last year
        </p>
        <div className="flex gap-1 items-center">
          <span className="mr-2">Less</span>
          {[...COLORS.values()].map((color) => (
            <div
              key={color}
              className="h-3 w-3 rounded-sm shadow-1"
              style={{ background: color }}
            />
          ))}
          <span className="ml-2">More</span>
        </div>
      </div>
    </div>
  );
};
