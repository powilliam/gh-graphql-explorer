import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

export interface WithAs {
  as?: ReactNode;
}

export type RowProps = ViewProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  WithAs;

export const Row = styled.View<RowProps>`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${border};
  ${position};

  flex-direction: row;
`;
