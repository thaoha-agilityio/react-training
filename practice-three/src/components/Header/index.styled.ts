import { AlignCenterStyle } from "../../styled-common";
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 12px 35px 14px 45px;
  display: flex;
  justify-content: space-between;
  background-color: var(--main-heading);
`;

const LogoStyled = styled.div`
  ${AlignCenterStyle};
  gap: 16px;
`;

const ActionWrapperStyled = styled(LogoStyled)`
  gap: 56px;
`;

export { HeaderStyled, LogoStyled, ActionWrapperStyled };
