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

export type ColumnProps = ViewProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  WithAs;

export const Column = styled.View<ColumnProps>`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${border};
  ${position};

  flex-direction: column;
`;
