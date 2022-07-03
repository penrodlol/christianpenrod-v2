import { FC, PropsWithChildren } from 'react';
import { Box } from './Box';
import { Header } from './Header';
import { Text } from './Text';

export interface LayoutProps {
  title?: string;
  subTitle?: string;
}

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <Box position="relative" zIndex="2">
      <Header />
      <Box
        as="main"
        marginX="auto"
        marginTop="clamp(1.31rem, calc(-0.52rem + 9.15vw), 6.00rem)"
        marginBottom="8"
        paddingX="fluid.4"
        maxWidth="xl"
      >
        <Box maxWidth="max-content" margin="0 auto">
          {props.title && <LayoutTitle {...props} />}
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

const LayoutTitle: FC<LayoutProps> = ({ title, subTitle }) => (
  <Box marginBottom="fluid.5">
    <Text as="h1" fontSize="fluid.7">
      {title}
    </Text>
    <Text as="h3" color="text.2" fontSize="fluid.6">
      {subTitle}
    </Text>
  </Box>
);
