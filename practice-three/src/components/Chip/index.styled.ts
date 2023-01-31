import styled from "styled-components";

import { fonts, metrics } from "../../themes";
import {
  JustifyBetweenStyle,
  CenterAllStyle,
} from "../../styled-common/layout";

interface StyledChipProps {
  width: number;
  height: number;
  color: string;
  flexLayout: boolean;
  borderRadius?: number;
  bgColor?: string;
  pLeft?: number;
  pRight?: number;
}

interface StyledLabelProps {
  fontSize: number;
  fontWeight: number;
}

export const ChipStyled = styled.div<StyledChipProps>`
  ${(props) => `width:${props.width}px`};
  ${(props) => `height:${props.height}px`};
  ${(props) => `color:${props.color}`};
  ${(props) => (props.flexLayout ? JustifyBetweenStyle : CenterAllStyle)}
  ${(props) => props.pLeft && `padding-left:${props.pLeft}px`};
  ${(props) => props.pRight && `padding-right:${props.pRight}px`};
  ${(props) => props.bgColor && `background:${props.bgColor}`};
  border-radius: ${(props) =>
    `${props.borderRadius}px` || `${metrics.borderRadius.lg}px`};
  gap: 13px;
  cursor: pointer;
`;

export const LabelStyled = styled.p<StyledLabelProps>`
  font-family: ${fonts.fontFamilies.primary};
  line-height: ${fonts.lineHeights.xl};
  text-transform: capitalize;
  ${(props) => `font-size:${props.fontSize}px`};
  ${(props) => `font-weight:${props.fontWeight}`};
`;
