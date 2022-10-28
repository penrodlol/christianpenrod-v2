import env from '@env/server';
import { createHash } from 'crypto';
import { NextApiRequest } from 'next';

export type GetUser = ReturnType<typeof getUser>;

export const getUser = (req: NextApiRequest) => {
  const data = `${req.headers['x-forwarded-for'] ?? '0.0.0.0'}${env.USER_SHA}`;
  return createHash('md5').update(data, 'utf8').digest('hex');
};
