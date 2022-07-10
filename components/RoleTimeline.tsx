import { Role } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Text } from './Text';

export interface RoleTimelineProps {
  role: Role;
}

const components = {
  p: styled(Text).attrs({ as: 'p', fontWeight: '6', mt: '3' })``,
  h2: styled(Text).attrs({ fontSize: 'fluid.3', mt: '5' })`
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: calc(-1.1 * var(--size-5));
      top: 50%;
      transform: translateY(-50%);
      width: 0.85rem;
      height: 0.85rem;
      border-radius: 50%;
      background: var(--brand-1);
      box-shadow: var(--shadow-3);
    }

    &:last-of-type:before {
      background: none;
      border: solid 0.2rem var(--brand-1);
    }
  `,
};

export const RoleTimeline: FC<RoleTimelineProps> = ({ role }) => {
  const RoleMDX = useMDXComponent(role.body.code);

  const start = dayjs.utc(role.start).format('MMM Do, YYYY');
  const end = role.end ? dayjs.utc(role.end).format('MMM Do, YYYY') : 'Present';

  return (
    <Box bg="surface.1" borderRadius="2" boxShadow="4" p="6">
      <Text as="h3" fontSize="fluid.5">
        {role.company}
      </Text>
      <Text as="h4" fontSize="fluid.3" color="text.2">
        {start} - {end}
      </Text>
      <Box position="relative">
        <Box
          position="absolute"
          bg="brand.1"
          opacity="0.3"
          borderRadius="2"
          top="4"
          bottom="1"
          width="2"
        />
        <Box display="flex" flexDirection="column" pl="5">
          <RoleMDX components={components} />
        </Box>
      </Box>
    </Box>
  );
};
