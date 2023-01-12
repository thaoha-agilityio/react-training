import styled from "styled-components";

import { colors } from "../../themes";

interface StyledButtonProps {
  width?: string;
  height?: string;
}

export const IconButton = styled.button<StyledButtonProps>`
  ${(props) => props.width && `width:${props.width}`};
  ${(props) => props.height && `height:${props.height}`};
  background-color: ${colors.transparent};
  border: none;
  cursor: pointer;
`;

export const CircleButton = styled(IconButton)`
  border-radius: 50%;
  border: 1px solid ${colors.gray[20]};
`;
