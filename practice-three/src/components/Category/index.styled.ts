import styled from "styled-components";

import {
  CategoryName,
  ThumbnailText,
  TinyText,
  JustifyBetweenStyle,
  AlignCenterStyle,
} from "../../styled-common";
import { metrics } from "../../themes";

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

const ThumbnailStyled = styled.div`
  position: relative;
  background-size: cover;
  border-radius: 50%;
  width: ${metrics.widths.xxs}px;
  height: ${metrics.heights.tiny}px;
`;

const ThumbnailTextStyled = styled(ThumbnailText)`
  position: absolute;
  top: 11px;
  left: 9px;
`;

const CategoryNameStyled = styled(CategoryName)`
  font-weight: 700;
`;

const TotalStyled = styled(TinyText)`
  color: #58667e;
`;

export {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
};
