import styled from "styled-components";

import { AlignCenterStyle, JustifyBetweenStyle } from "../../styled-common";

const HeaderStyled = styled.header`
  ${JustifyBetweenStyle};
  padding: 12px 35px 14px 45px;
  background-color: ${({ theme }) => theme.mainHeading};
`;

const LogoStyled = styled.div`
  ${AlignCenterStyle};
  gap: 16px;
`;

const ActionWrapperStyled = styled(LogoStyled)`
  gap: 56px;
`;

export { HeaderStyled, LogoStyled, ActionWrapperStyled };
