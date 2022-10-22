import { Layout } from '@components/Layout';
import ArrowLeftIcon from '@svg/arrow-left.svg';
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
            <ArrowLeftIcon
              className="w-8 h-8 fill-accent-2 group-hover:fill-accent-1"
              aria-hidden
            />
            <span className="text-2 group-hover:text-1">Go to Home</span>
          </a>
        </Link>
      </section>
    </Layout>
  );
};

export default Custom404;
