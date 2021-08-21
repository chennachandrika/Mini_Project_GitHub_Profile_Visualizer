import styled from "styled-components";

export const RepositoryContributorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RepoContributorsHeading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ContributorsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ContributorsAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  margin-left: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
