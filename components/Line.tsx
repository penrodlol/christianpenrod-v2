import { FC } from 'react';
import { Box } from './Box';

export interface LineProps {
  space?: string;
  height?: string;
}

export const Line: FC<LineProps> = ({ space, height }) => (
  <Box
    backgroundColor="brand.1"
    borderRadius="2"
    height={height || '2'}
    marginY={space || '3'}
  />
);
