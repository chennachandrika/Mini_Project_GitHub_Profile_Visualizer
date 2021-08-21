import styled from "styled-components";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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

export const RepoPath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  outline: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${(props) => (props.isActive ? "#3B82F6;" : "#7E858E")};
  }
  font-weight: bold;
  color: ${(props) => (props.isActive ? "#3B82F6;" : "#7E858E")};
  font-size: 18px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Text = styled.h1`
  font-size: 18px;
  margin-top: 15px;
  color: ${(props) => (props.isActive ? "#3B82F6;" : "#7E858E")};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NextIcon = styled(ChevronRightIcon)`
  color: #7e858e;
  margin: 10px 0;
`;
