import styled from "styled-components";

import { ColumnBaselineStyle } from "../../styled-common/layout";
import { colors, fonts, metrics } from "../../themes";
import { P } from "../../styled-common/paragraph";
import { fontSizes, lineHeights } from "../../themes/fonts";

type CardItemProps = {
  isGridView: boolean;
};

const CardItemStyled = styled.div<CardItemProps>`
  width: ${(props) =>
    props.isGridView ? `${metrics.widths.lg}px` : `${metrics.widths["3xl"]}px`};
  height: ${(props) =>
    props.isGridView
      ? `${metrics.heights["4xl"]}px`
      : `${metrics.heights.xl}px`};
  box-shadow: ${metrics.shadows.sm};
  border-radius: ${metrics.borderRadius.tiny}px;
  display:flex;
  align-items:${(props) => props.isGridView ? 'baseline' : 'center'};
  background-color: ${({ theme }) => theme.mainHeading};
  flex-direction: ${(props) => (props.isGridView ? " column" : "row")};
  cursor: pointer;
`;

const CardImgWrapperStyled = styled.div<CardItemProps>`
  width: ${(props) => (props.isGridView ? `249px` : "396px")};
  height: ${(props) => (props.isGridView ? `238px` : "178px")};
  background-color: ${colors.linkWater};
  border-radius: ${metrics.borderRadius.tiny}px;
  margin: 13px 18px;
  padding: 18px 20px;
`;

const CardContentStyled = styled.div`
  margin: 21px 19px;
  font-weight: ${fonts.fontWeights.semiBold};
`;

const CardTitleStyled = styled(P.Medium) <CardItemProps>`
  color: ${({ theme }) => theme.textColor};
  ${(props) => !props.isGridView && `font-size: ${fontSizes.xxl}px;`}
  ${(props) => !props.isGridView && `line-height: ${lineHeights.xl};`}
`;

const CardInfoStyled = styled(P.Small) <CardItemProps>`
  color: ${({ theme }) => theme.infoBook};
  ${(props) => !props.isGridView && `font-size: ${fontSizes.lg}px;`}
  ${(props) => !props.isGridView && `line-height: ${lineHeights.sm};`}
`;

export {
  CardItemStyled,
  CardImgWrapperStyled,
  CardInfoStyled,
  CardContentStyled,
  CardTitleStyled,
};
