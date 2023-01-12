import styled from "styled-components";

import { fonts, colors, metrics } from "@/themes";

export const LabelButtonStyled = styled.button`
  width: ${metrics.widths.tiny};
  height: ${metrics.heights.xxs};
  font-family: ${fonts.fontFamilies.secondary};
  font-weight: ${fonts.fontWeights.semiBold};
  color: ${colors.white};
  background-color: ${colors.gray[100]};
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
