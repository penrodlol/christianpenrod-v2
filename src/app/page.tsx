import { Line } from '@ui/Line';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-fluid-6">
      <div className="flex flex-col justify-between gap-fluid-7 lg:flex-row">
        <section>
          <h1 className="text-6xl">Hi, I&apos;m Christian</h1>
          <h2 className="text-2 text-2xl">Front-End Web Developer</h2>
          <Line className="my-8 h-2 max-w-lg" />
          <div className="mt-fluid-5 sm:max-w-max"></div>
        </section>
        <div className="flex flex-col gap-fluid-4 lg:w-2/5">
          <section className="flex flex-col gap-2">
            <h3 className="text-2 text-xl">Projects</h3>
            <ul className="flex flex-col gap-4"></ul>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="text-2 text-xl">Open Source</h3>
          </section>
        </div>
      </div>
      <section className="flex flex-col gap-fluid-2">
        <h3 className="text-2 text-xl">Recent Posts</h3>
      </section>
    </div>
  );
};

export default HomePage;
