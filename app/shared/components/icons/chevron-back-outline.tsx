import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface SVGChevronBackOutlineProps {
  size?: number;
  color?: string;
}

export function SVGChevronBackOutline({
  size,
  color,
}: SVGChevronBackOutlineProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.375 5.25L8.625 12L15.375 18.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

SVGChevronBackOutline.defaultProps = {
  size: 24,
  color: '#FFFFFF',
};
