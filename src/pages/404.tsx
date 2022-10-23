import { Layout } from '@components/Layout';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Layout>
      <section className="text-center">
        <h1 className="text-[clamp(8.55rem,calc(7.43rem+5.64vw),11.44rem)] leading-none text-brand-2">
          404
        </h1>
        <h2 className="text-3xl">Page Not Found</h2>
        <Link href="/" passHref>
          <a className="group text-xl flex items-center gap-5 justify-center mt-fluid-5">
            <ArrowLeft
              className="w-8 h-8 stroke-accent-2 group-hover:stroke-accent-1"
              aria-hidden
              strokeWidth="3"
            />
            <span className="text-2 group-hover:text-1">Go to Home</span>
          </a>
        </Link>
      </section>
    </Layout>
  );
};

export default Custom404;
