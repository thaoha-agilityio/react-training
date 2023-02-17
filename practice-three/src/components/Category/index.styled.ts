import styled from 'styled-components';

import { JustifyBetweenStyle, AlignCenterStyle, P } from '../../styled-common';
import { colors, fonts, metrics } from '../../themes';

type StyledThumbnailProps = {
  bgColor: string;
};

type StyledCategory = {
  isActive?: boolean;
};

const CategoryWrapperStyled = styled.div<StyledCategory>`
  ${JustifyBetweenStyle}
  width: ${metrics.widths.md}px;
  height: ${metrics.heights.sm}px;
  border-radius: ${metrics.borderRadius.md}px;
  margin-left: 14px;
  padding: 8px 18px 0px;
  background-color: ${({ theme }) => theme.mainHeading};
  ${(props) => props.isActive && `background: ${colors.linkWater}`};
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
  color: ${({ theme }) => theme.textColor};
`;

const TotalStyled = styled(P.Tiny)`
  color: ${({ theme }) => theme.infoBook};
`;

export {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
};
