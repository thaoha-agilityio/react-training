import styled from "styled-components";

import { metrics, fonts, colors } from "../../themes";

interface StyledInputProps {
  width: number;
  height: number;
  borderRadius: number;
  pLeft: number;
}

const InputGroupStyled = styled.div`
  display: flex;
  position: relative;
`;

const InputLeftElementStyled = styled.div`
  position: absolute;
  z-index: 1;
  padding-top: ${metrics.paddings.md}px;
  padding-left: ${metrics.paddings.lg}px;
`;

const InputStyled = styled.input<StyledInputProps>`
  ${(props) => props.width && `width:${props.width}px`};
  ${(props) => props.height && `height:${props.height}px`};
  ${(props) => props.borderRadius && `border-radius:${props.borderRadius}px`};
  ${(props) => props.pLeft && `padding-left:${props.pLeft}px`};
  font-family: ${fonts.fontFamilies.primary};
  box-shadow: ${metrics.shadows.sm};
  font-size: ${fonts.fontSizes.sm}px;
  line-height: ${fonts.lineHeights.tiny};
  border: none;

  &::placeholder {
    color: ${colors.gray[10]};
  }
`;

export { InputGroupStyled, InputLeftElementStyled, InputStyled };
