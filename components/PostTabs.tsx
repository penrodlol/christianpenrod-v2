import * as RadixTabs from '@radix-ui/react-tabs';
import { Children, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Text } from './Text';

export interface PostTabsProps {
  values: Array<string>;
}

export const PostTabs = ({
  values,
  children,
}: PropsWithChildren<PostTabsProps>) => (
  <RadixTabs.Root defaultValue={values[0]} asChild>
    <Box bg="surface.1" borderRadius="2" boxShadow="3">
      <RadixTabs.TabsList asChild>
        <Box flexContainer>
          {values.map((value) => (
            <RadixTabs.Trigger key={value} value={value} asChild>
              <Trigger
                position="relative"
                flexContainer
                justifyContent="center"
                flex="1"
                padding="2"
                color="text.2"
              >
                <Text fontSize="2">{value}</Text>
              </Trigger>
            </RadixTabs.Trigger>
          ))}
        </Box>
      </RadixTabs.TabsList>
      {Children.toArray(children).map((child, index) => (
        <RadixTabs.Content key={index} value={values[index]} asChild>
          <Box
            bg="surface.2"
            padding="5"
            borderBottomLeftRadius="inherit"
            borderBottomRightRadius="inherit"
            style={{ cursor: 'auto' }}
          >
            {child}
          </Box>
        </RadixTabs.Content>
      ))}
    </Box>
  </RadixTabs.Root>
);

const Trigger = styled(Box)`
  &[data-state='active'],
  &:hover {
    color: var(--text-1);
  }

  &[data-state='active']:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: var(--layer-2);
      height: var(--size-1);
      border-radius: var(--radius-2);
      background: var(--brand-1);
    }
  }
`;
