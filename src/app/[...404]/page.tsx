import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => (
  <section className="text-center">
    <h1 className="text-[clamp(8.55rem,calc(7.43rem+5.64vw),11.44rem)] leading-none text-brand-2">
      404
    </h1>
    <h2 className="text-3xl">Page Not Found</h2>
    <Link
      href="/"
      className="group mt-fluid-5 flex items-center justify-center gap-5 text-xl"
    >
      <ArrowLeft className="h-8 w-8 stroke-accent-2 group-hover:stroke-accent-1" />
      <span className="text-2 group-hover:text-1">Go to Home</span>
    </Link>
  </section>
);

export default NotFoundPage;
