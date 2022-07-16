import { Button } from './Button';
import { Line } from './Line';

export const Hero = () => {
  return (
    <div className="max-w-max">
      <h1 className="text-fluid-8">Hi, I&apos;m Christian.</h1>
      <h3 className="text-gray-2 text-fluid-5">Front-End Web Developer</h3>
      <Line className="h-2 my-8" />
      <p className="text-fluid-3 font-semibold max-w-[50ch]">
        Developing for the web since 2015, based in Pittsburgh PA. A few areas I
        tend to focus on include developer experience tooling, responsive web
        design, and occasionally some attempts at teaching.
      </p>
      <div className="mt-fluid-5 xl:max-w-max">
        <Button variant="cta" className="w-full" aria-label="Open contact form">
          Contact
        </Button>
      </div>
    </div>
  );
};
