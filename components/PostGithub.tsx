import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import GithubForkIcon from '@svg/github-fork.svg';
import GithubStarIcon from '@svg/github-star.svg';
import { fetchRepo } from '@utils/octokit';
import { FC } from 'react';
import { useAsync } from 'react-async-hook';
import { Anchor } from './Anchor';
import { Box } from './Box';
import { Text } from './Text';

export interface PostGithubProps {
  github: string;
}

export const PostGithub: FC<PostGithubProps> = ({ github }) => {
  const { result } = useAsync(fetchRepo, [github]);

  return (
    <Box bg="surface.2" boxShadow="3" borderRadius="2" p="4">
      <Box flexContainer gap="3" alignItems="center" color="brand.1">
        <GithubBookmarkIcon width={25} height={25} />
        <Anchor
          href={result?.html_url}
          target="_blank"
          rel="nofollow noreferrer"
          color="text.1"
          fontSize="3"
        >
          {result?.name}
        </Anchor>
      </Box>
      <Text as="p" color="text.2" fontWeight="6" mt="3" mb="4">
        {result?.description}
      </Text>
      <Box flexContainer gap="3" alignItems="center">
        <Box flexContainer gap="2" alignItems="center" mr="3">
          <Box bg="accent.2" size="3" borderRadius="50%" />
          <Text color="text.2" fontWeight="6">
            {result?.language}
          </Text>
        </Box>
        <Box flexContainer gap="2" alignItems="center" color="brand.1">
          <GithubStarIcon width={20} height={20} />
          <Text color="text.2" fontWeight="6">
            {result?.stargazers_count}
          </Text>
        </Box>
        <Box flexContainer gap="2" alignItems="center" color="brand.1">
          <GithubForkIcon width={20} height={20} />
          <Text color="text.2" fontWeight="6">
            {result?.forks_count}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
