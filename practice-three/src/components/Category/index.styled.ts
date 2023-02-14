import styled from "styled-components";

import { JustifyBetweenStyle, AlignCenterStyle, P } from "../../styled-common";
import { colors, fonts, metrics } from "../../themes";

interface StyledThumbnailProps {
  bgColor: string;
}

const CategoryWrapperStyled = styled.div`
  ${JustifyBetweenStyle}
  width: ${metrics.widths.md}px;
  height: ${metrics.heights.sm}px;
  border-radius: ${metrics.borderRadius.md}px;
  margin-left: 14px;
  padding: 8px 18px 0px;
  cursor: pointer;
`;

const CategoryStyled = styled.div`
  ${AlignCenterStyle};
  gap: 11px;
`;

const ThumbnailStyled = styled.div<StyledThumbnailProps>`
  position: relative;
  background-size: cover;
  border-radius: 50%;
  width: ${metrics.widths.xxs}px;
  height: ${metrics.heights.tiny}px;
  ${(props) => ` background-color:${props.bgColor}`};
`;

const ThumbnailTextStyled = styled(P.Thumbnail)`
  position: absolute;
  top: 11px;
  left: 9px;
  font-weight: ${fonts.fontWeights.bold};
`;

const CategoryNameStyled = styled(P.CategoryName)`
  text-transform: capitalize;
`;

const TotalStyled = styled(P.Tiny)`
  color: ${colors.comet};
`;

export {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
};
