import styled from "styled-components";

import { colors, metrics } from "../../themes";

interface StyledButtonProps {
  width: number;
  height: number;
  textAlign: string;
  borderRadius: number;
  bgColor?: string;
  pLeft?: number;
  pRight?: number;
}

export const ToggleButtonStyled = styled.button<StyledButtonProps>`
  ${(props) => props.width && `width:${props.width}px`};
  ${(props) => props.height && `height:${props.height}px`};
  ${(props) => props.textAlign && `text-align:${props.textAlign}`};
  ${(props) => props.borderRadius && `border-radius:${props.borderRadius}px`};
  background-color: ${(props) => props.bgColor || colors.transparent};
  box-shadow: ${metrics.shadows.md};
  padding-left: ${(props) => (props.pLeft ? props.pLeft : 10)}px;
  padding-right: ${(props) => (props.pRight ? props.pRight : 10)}px;
  border: none;
  cursor: pointer;
`;
