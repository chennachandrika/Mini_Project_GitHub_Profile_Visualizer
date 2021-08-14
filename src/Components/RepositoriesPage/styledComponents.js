import styled from "styled-components";

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
