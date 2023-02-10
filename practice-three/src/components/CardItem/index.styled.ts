import styled from "styled-components";

import { ColumnCenterStyle } from "../../styled-common/layout";
import { colors, fonts, metrics } from "../../themes";
import { P } from "../../styled-common/paragraph";

type CardItemProps = {
  isGridView: boolean;
};

const CardItemStyled = styled.div<CardItemProps>`
  width: ${(props) => (props.isGridView ? `${metrics.widths.lg}px` : "908px")};
  height: ${(props) =>
    props.isGridView ? `${metrics.heights["4xl"]}px` : "213px"};
  box-shadow: ${metrics.shadows.sm};
  border-radius: ${metrics.borderRadius.tiny}px;
  ${ColumnCenterStyle}
  background-color: ${({ theme }) => theme.mainHeading};
  cursor: pointer;
`;

const CardImgWrapperStyled = styled.div`
  width: 249px;
  height: 238px;
  background-color: ${colors.linkWater};
  border-radius: ${metrics.borderRadius.tiny}px;
  margin: 13px 18px;
  padding: 18px 20px;
`;

const CardContentStyled = styled.div`
  margin: 21px 19px;
  font-weight: ${fonts.fontWeights.semiBold};
`;

const CardTitleStyled = styled(P.Medium)`
  color: ${({ theme }) => theme.textColor};
`;

const CardInfoStyled = styled(P.Small)`
  color: ${({ theme }) => theme.infoBook};
`;

export {
  CardItemStyled,
  CardImgWrapperStyled,
  CardInfoStyled,
  CardContentStyled,
  CardTitleStyled,
};
