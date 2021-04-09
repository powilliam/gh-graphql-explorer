import { TextProps as RNTextProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  color,
  layout,
  border,
  variant,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  TypographyProps,
} from 'styled-system';

export enum TextVariants {}

export interface WithVariant {
  variant?: TextVariants;
}

export type TextProps = RNTextProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  TypographyProps &
  WithVariant;

export const Text = styled.Text<TextProps>`
  ${space};
  ${color};
  ${layout};
  ${border};
  ${typography};
  ${variant({
    variants: {},
  })}
`;
