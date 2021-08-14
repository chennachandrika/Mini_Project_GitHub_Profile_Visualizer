import styled from "styled-components";

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
