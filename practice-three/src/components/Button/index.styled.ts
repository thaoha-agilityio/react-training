import styled from "styled-components";

import { colors } from "../../themes";

interface StyledButtonProps {
  width?: number;
  height?: number;
}

export const IconButtonStyled = styled.button<StyledButtonProps>`
  ${(props) => props.width && `width:${props.width}px`};
  ${(props) => props.height && `height:${props.height}px`};
  background-color: ${colors.transparent};
  border: none;
  cursor: pointer;
`;

export const CircleButtonStyled = styled(IconButtonStyled)`
  border-radius: 50%;
  border: 1px solid ${colors.gray[20]};
`;
