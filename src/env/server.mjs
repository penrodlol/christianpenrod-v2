// @ts-check
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  DATABASE_URL: z.string().url(),
  GITHUB_USERNAME: z.string(),
  GITHUB_TOKEN: z.string(),
});

const env = schema.safeParse(process.env);

if (!env.success) throw new Error('Invalid environment variables');

export default env.data;
