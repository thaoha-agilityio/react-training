import styled from "styled-components";

import { ColumnCenterStyle } from "../../styled-common/layout";
import { colors, fonts, metrics } from "../../themes";

const CardItemStyled = styled.div`
  width: ${metrics.widths.lg}px;
  height: ${metrics.heights["4xl"]}px;
  box-shadow: ${metrics.shadows.sm}px;
  border-radius: ${metrics.borderRadius.tiny}px;
  ${ColumnCenterStyle}
  cursor: pointer;
`;

const CardImgWrapperStyled = styled.div`
  width: 249px;
  height: 238px;
  background-color: ${colors.gray[30]};
  border-radius: ${metrics.borderRadius.tiny}px;
  margin: 13px 18px;
  padding: 18px 20px;
`;

const CardContentStyled = styled.div`
  margin: 21px 19px;
  font-weight: ${fonts.fontWeights.semiBold};
`;

const CardTitleStyled = styled.h2`
  font-family: ${fonts.fontFamilies.primary};
  font-size: ${fonts.fontSizes.lg}px;
  line-height: ${fonts.lineHeights.md};
`;

const CardInfoStyled = styled.p`
  font-family: ${fonts.fontFamilies.tertiary};
  font-size: ${fonts.fontSizes.sm}px;
  line-height: ${fonts.lineHeights.md};
  color: ${colors.gray[300]};
`;

export {
  CardItemStyled,
  CardImgWrapperStyled,
  CardInfoStyled,
  CardTitleStyled,
  CardContentStyled,
};
