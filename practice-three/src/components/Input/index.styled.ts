import styled from "styled-components";

import { metrics, fonts, colors } from "../../themes";

interface StyledInputProps {
  borderRadius: number;
  pLeft: number;
  width?: number;
  height?: number;
}

const InputGroupStyled = styled.div`
  display: flex;
  position: relative;
`;

const InputStartAdornmentStyled = styled.div`
  position: absolute;
  z-index: 1;
  padding-top: ${metrics.paddings.md}px;
  padding-left: ${metrics.paddings.lg}px;
`;

const InputStyled = styled.input<StyledInputProps>`
  ${(props) => `width:${props.width}px`};
  ${(props) => `height:${props.height}px`};
  ${(props) => `border-radius:${props.borderRadius}px`};
  ${(props) => `padding-left:${props.pLeft}px`};
  font-family: ${fonts.fontFamilies.primary};
  box-shadow: ${metrics.shadows.sm};
  font-size: ${fonts.fontSizes.sm}px;
  line-height: ${fonts.lineHeights.tiny};
  border: none;

  &::placeholder {
    color: ${colors.ash};
  }
`;

export { InputGroupStyled, InputStartAdornmentStyled, InputStyled };
