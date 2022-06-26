import EyeIcon from '@svg/eye.svg';
import { Box } from './Box';
import { Text } from './Text';

export const PostViews = () => (
  <Box
    flexContainer
    gap="2"
    alignItems="center"
    bg="surface.2"
    borderRadius="2"
    boxShadow="3"
    color="brand.1"
    width="max-content"
    paddingY="2"
    paddingX="4"
  >
    <EyeIcon width={25} height={25} />
    <Text color="text.1" fontSize="3" letterSpacing="4">
      {String(153).padStart(6, '0')}
    </Text>
  </Box>
);
