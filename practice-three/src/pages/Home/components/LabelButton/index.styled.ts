import styled from "styled-components";

import { fonts, colors, metrics } from "../../../../themes";

export const LabelButtonStyled = styled.button`
  width: ${metrics.widths.tiny}px;
  height: ${metrics.heights.xxs}px;
  font-family: ${fonts.fontFamilies.secondary};
  font-weight: ${fonts.fontWeights.semiBold};
  color: ${colors.white};
  background-color: ${colors.cadetBlue};
  border-radius: ${metrics.borderRadius.tiny}px;
  padding-left: ${metrics.paddings.sm}px;
  padding-right: ${metrics.paddings.sm}px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
