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

export enum TextVariants {
  LIGHT = 'ligh',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  BOLD = 'bold',
}

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
    variants: {
      [TextVariants.LIGHT]: {
        fontFamily: 'Mulish-Light',
      },
      [TextVariants.REGULAR]: {
        fontFamily: 'Mulish-Regular',
      },
      [TextVariants.MEDIUM]: {
        fontFamily: 'Mulish-Medium',
      },
      [TextVariants.BOLD]: {
        fontFamily: 'Mulish-Bold',
      },
    },
  })}
`;

Text.defaultProps = {
  variant: TextVariants.REGULAR,
};
