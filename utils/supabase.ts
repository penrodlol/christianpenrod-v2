import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  `https://${process.env.SUPABASE_DOMAIN!}`,
  process.env.SUPABASE_ANON_KEY!,
);
