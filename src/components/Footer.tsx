import GithubIcon from '@svg/github.svg';
import LinkedinIcon from '@svg/linkedin.svg';
import TwitterIcon from '@svg/twitter.svg';
import dayjs from 'dayjs';
import { Button } from './Button';

export const Footer = () => (
  <footer
    className="relative bg-surface-3 py-2 before:content-blank before:absolute
               before:inset-0 before:shadow-1 before:rotate-180 before:z-10"
  >
    <div className="relative flex flex-col gap-2 items-center z-20">
      <div className="flex gap-2 max-w-max">
        <Button variant="icon" aria-label="Navigate to my twitter">
          <TwitterIcon width="30" height="30" />
        </Button>
        <Button variant="icon" aria-label="Navigate to my github">
          <GithubIcon width="30" height="30" />
        </Button>
        <Button variant="icon" aria-label="Navigate to my linkedin">
          <LinkedinIcon width="30" height="30" />
        </Button>
      </div>
      <div className="flex gap-2 text-xl">
        <span className="font-semibold">Christian Penrod</span>
        <span className="text-accent-2 font-bold">&#169;{dayjs().year()}</span>
      </div>
    </div>
  </footer>
);
