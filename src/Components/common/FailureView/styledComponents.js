import styled from "styled-components";

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FailureViewLogo = styled.img`
  width: 296px;
  height: 145px;
  @media screen and (min-width: 1024px) {
    width: 560px;
    height: 274px;
  }
`;

export const FailureText = styled.h1`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const TryAgainButton = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;
