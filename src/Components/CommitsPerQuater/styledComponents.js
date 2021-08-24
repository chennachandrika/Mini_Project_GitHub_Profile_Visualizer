import styled from "styled-components";

export const CommitsPerQuaterGraphContainer = styled.div`
  background-color: #132240;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const CommitsPerQuaterGraphHeading = styled.h1`
  font-size: 20px;
  color: #f8fafc;
  @media screen and (min-width: 768px) {
    font-weight: bold;
    font-size: 32px;
  }
`;

export const CommitsPerQuaterGraph = styled.p`
  font-size: 14px;
  color: #3b82f6;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
