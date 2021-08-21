import styled from "styled-components";

export const RepositoryItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: #0f172a;
`;

export const RepositoryCardContainer = styled.div`
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  text-decoration: none;
  outline: none;
  background: rgba(255, 255, 255, 0.06);
  width: 312px;

  @media screen and (min-width: 1024px) {
    width: 920px;
    padding: 20px;
  }
  @media screen and (min-width: 2048px) {
    height: 100%;
    width: 1140px;
  }
`;
