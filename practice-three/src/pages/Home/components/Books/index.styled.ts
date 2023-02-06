import styled from "styled-components";

export const BooksStyled = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding: 33px 38px;
  background: var(--main-content);
  margin: 1px 1px;
  flex: 1;
  max-height: calc(100vh - 79px - 84px);
  overflow: auto;
`;
