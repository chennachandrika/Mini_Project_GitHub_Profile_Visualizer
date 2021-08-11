import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const DataNotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
  min-height: 100vh;
`;

export const DataNotFoundViewLogo = styled.img`
  width: 296px;
  height: 166px;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    width: 677px;
    height: 380px;
  }
`;

export const NoDataHeading = styled.h1`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const RepositoryCard = styled(Link)`
  text-decoration: none;
`;

export const RepositoryTitle = styled.h1``;
export const RepositoryDescription = styled.p``;
export const RepositoryLanguages = styled.div``;
export const RepositoryInfo = styled.div``;
export const RepositoryInfoContainer = styled.div``;
export const RepositoryInfoCount = styled.p``;
