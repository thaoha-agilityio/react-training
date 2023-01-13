import styled from "styled-components";

import { colors, metrics } from "@/themes";

interface StyledButtonProps {
  width: string;
  height: string;
  textAlign: string;
  borderRadius: string;
  bgColor?: string;
  pLeft?: number;
  pRight?: number;
}

export const ToggleButtonStyled = styled.button<StyledButtonProps>`
  ${(props) => props.width && `width:${props.width}`};
  ${(props) => props.height && `height:${props.height}`};
  ${(props) => props.textAlign && `text-align:${props.textAlign}`};
  ${(props) => props.borderRadius && `border-radius:${props.borderRadius}`};
  background-color: ${(props) => props.bgColor || colors.transparent};
  box-shadow: ${metrics.shadows.md};
  padding-left: ${(props) => (props.pLeft ? props.pLeft : 10)}px;
  padding-right: ${(props) => (props.pRight ? props.pRight : 10)}px;
  border: none;
  cursor: pointer;
`;
