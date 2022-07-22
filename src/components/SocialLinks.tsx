import GithubIcon from '@svg/github.svg';
import LinkedinIcon from '@svg/linkedin.svg';
import TwitterIcon from '@svg/twitter.svg';
import { Button } from './Button';

export const SocialLinks = () => (
  <>
    <Button variant="icon" aria-label="Navigate to my twitter">
      <TwitterIcon width="30" height="30" />
    </Button>
    <Button variant="icon" aria-label="Navigate to my github">
      <GithubIcon width="30" height="30" />
    </Button>
    <Button variant="icon" aria-label="Navigate to my linkedin">
      <LinkedinIcon width="30" height="30" />
    </Button>
  </>
);
