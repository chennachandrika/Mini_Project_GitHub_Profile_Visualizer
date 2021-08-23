import styled from "styled-components";

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

export const LookUPImg = styled.img`
  height: 21px;
  width: 21px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const LookUPLink = styled.a``;
