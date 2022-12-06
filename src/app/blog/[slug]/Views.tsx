import { prisma } from '@utils/prisma';
import { Eye } from 'lucide-react';

export const Views = async ({ slug: post }: { slug: string }) => {
  const { views } = await prisma.postView.upsert({
    update: { views: { increment: 1 } },
    create: { post },
    where: { post },
    select: { views: true },
  });

  return (
    <div className="flex items-center gap-3 rounded-md bg-2 py-3 px-5 elevation-3">
      <Eye className="h-6 w-6 stroke-brand-2" strokeWidth="3" aria-hidden />
      <span className="tracking-widest text-1 text-base">
        {String(views ?? 0).padStart(6, '0')}
      </span>
    </div>
  );
};
