import styled, { keyframes } from 'styled-components';

import { colors } from '../../themes';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SpinnerStyled = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${colors.linkWater};
  border-top-color: ${colors.ebonyClay};
  animation: ${spinAnimation} 0.8s linear infinite;
`;

export const Spinner = (): React.ReactElement => (
  <SpinnerContainer data-testid="spinner">
    <SpinnerStyled />
  </SpinnerContainer>
);
