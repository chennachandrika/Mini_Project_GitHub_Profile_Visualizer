import styled from "styled-components";
import { Link } from "react-router-dom";

export const RepositoriesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
  width: 100%;
  min-height: 93vh;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;
export const Heading = styled.h1`
  font-weight: bold;
  font-size: 24px;
  align-self: center;
  color: #f8fafc;
  @media screen and (min-width: 768px) {
    font-size: 32px;
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
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  text-decoration: none;
  outline: none;
  background: rgba(255, 255, 255, 0.06);
  width: 312px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  @media screen and (min-width: 1024px) {
    width: 920px;
    padding: 20px;
  }
  @media screen and (min-width: 2048px) {
    height: 100%;
    width: 1140px;
  }
`;

export const RepositoryTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: #3b82f6;
  text-decoration: none;
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;
export const RepositoryDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
export const RepositoryLanguages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  color: #3b82f6;
  font-weight: 600;
  font-size: 12px;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const RepositoryInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
`;
export const RepositoryInfoCount = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const RepositoryInfoIcon = styled.img`
  margin-right: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: center;
  margin: 10px;
`;

export const PaginationButton = styled.button`
  padding: 10px;
  margin: 10px;
  color: #ffffff;
  border: 1px solid #ffffff;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;
export const PaginationPages = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
