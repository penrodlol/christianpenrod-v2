import { supabase } from '@utils/supabase';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const slug = String(req.query.slug);
  const payload = await supabase.rpc('update_post_views', { slug }).single();

  res.status(200).json(payload.data);
}
