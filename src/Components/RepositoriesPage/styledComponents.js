import styled from "styled-components";

export const RepositoriesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 93vh;
  }
`;
export const Heading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  align-self: flex-start;
  color: #f8fafc;
  @media screen {
    font-size: 24px;
  }
`;
