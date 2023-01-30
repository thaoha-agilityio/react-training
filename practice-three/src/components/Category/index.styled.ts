import styled from "styled-components";

import {
  CategoryName,
  ThumbnailText,
  TinyText,
  JustifyBetweenStyle,
  AlignCenterStyle,
} from "../../styled-common";
import { colors, metrics } from "../../themes";

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

const ThumbnailTextStyled = styled(ThumbnailText)`
  position: absolute;
  top: 11px;
  left: 9px;
  font-weight: 700;
`;

const CategoryNameStyled = styled(CategoryName)`
  text-transform: capitalize;
`;

const TotalStyled = styled(TinyText)`
  color: ${colors.gray[150]};
`;

export {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
};
