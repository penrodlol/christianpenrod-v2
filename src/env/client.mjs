// @ts-check
import { z } from 'zod';

const schema = z.object({
  URL: z.string().url(),
  TWITTER: z.string().url(),
  GITHUB: z.string().url(),
  LINKEDIN: z.string().url(),
  MCKESSON: z.string().url(),
  LAROCHE: z.string().url(),
});

const env = schema.safeParse({
  URL: process.env.NEXT_PUBLIC_URL,
  TWITTER: process.env.NEXT_PUBLIC_TWITTER,
  GITHUB: process.env.NEXT_PUBLIC_GITHUB,
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN,
  MCKESSON: process.env.NEXT_PUBLIC_MCKESSON,
  LAROCHE: process.env.NEXT_PUBLIC_LAROCHE,
});

if (!env.success) throw new Error('Invalid environment variables');

export default env.data;
