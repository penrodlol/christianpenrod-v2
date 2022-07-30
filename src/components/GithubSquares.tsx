import { CommitSquare } from '@prisma/client';
import { FC } from 'react';

export interface GithubSquaresProps {
  squares: Array<CommitSquare>;
}

export const GithubSquares: FC<GithubSquaresProps> = ({ squares }) => {
  return <div></div>;
};
