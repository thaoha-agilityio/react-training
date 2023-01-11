import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 1273px;
  margin: auto;
`;

const AlignCenterStyle = css`
  display: flex;
  align-items: center;
`;

const JustifyBetweenStyle = css`
  display: flex;
  justify-content: space-between;
`;

const ColumnCenterStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, AlignCenterStyle, JustifyBetweenStyle, ColumnCenterStyle };
