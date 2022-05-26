import { Box } from './Box';
import { Line } from './Line';
import { Text } from './Text';

export const Hero = () => {
  return (
    <Box>
      <Text as="h1" fontSizeFluid="8">
        Hi, I&apos;m Christian.
      </Text>
      <Text as="h3" color="text.2" fontSizeFluid="5">
        Front-End Web Developer
      </Text>
      <Line />
      <Text as="p" fontSize="3" fontWeight="6">
        Developing for the web since 2015, based in Pittsburgh PA. A few areas I
        tend to focus on include developer experience tooling, responsive web
        design, and occasionally some attempts at teaching.
      </Text>
    </Box>
  );
};
