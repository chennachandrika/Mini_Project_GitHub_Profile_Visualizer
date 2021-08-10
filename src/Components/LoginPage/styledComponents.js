import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0f172a;
  padding: 10px;
`;

export const LoginPageHeading = styled.h1`
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #f8fafc;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const TextInput = styled.input`
  background-color: #1d2537;
  border-radius: 4px;
  border: ${(props) =>
    props.isUsernameInvalid ? "1px solid #DC2626" : "none"};
  outline: none;
  height: 32px;
  width: 232px;
  padding: 12px;
  font-size: 12px;
  color: #94a3b8;
  @media screen and (min-width: 1024px) {
    height: 56px;
    width: 458px;
    font-size: 24px;
  }
`;

export const LoginPageImage = styled.img`
  margin: 10px;
  width: 264px;
  height: 204px;
  @media screen and (min-width: 1024px) {
    width: 538px;
    height: 417px;
  }
`;
