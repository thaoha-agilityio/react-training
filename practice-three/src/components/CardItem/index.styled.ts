import styled from "styled-components";

import { ColumnCenterStyle } from "../../styled-common/layout";
import { colors, fonts, metrics } from "../../themes";
import { SubHeading } from "../../styled-common/paragraph";

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

const CardInfoStyled = styled(SubHeading)`
  color: ${colors.gray[300]};
`;

export {
  CardItemStyled,
  CardImgWrapperStyled,
  CardInfoStyled,
  CardContentStyled,
};
