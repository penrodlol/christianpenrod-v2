import { FC } from 'react';
import { Box } from './Box';

export interface LineProps {
  size?: string;
  height?: string;
}

export const Line: FC<LineProps> = ({ size, height }) => (
  <Box
    backgroundColor="brand.1"
    borderRadius="2"
    height={height || '2'}
    marginY={size || '3'}
  />
);
