import { FC } from 'react';
import { Box } from './Box';

export interface LineProps {
  size?: string;
}

export const Line: FC<LineProps> = ({ size }) => (
  <Box
    backgroundColor="brand.1"
    borderRadius="2"
    height="1"
    marginY={size || '3'}
  />
);
