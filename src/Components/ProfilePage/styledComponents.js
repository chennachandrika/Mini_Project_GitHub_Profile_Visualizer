import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
  height: 100%;
  @media screen and (min-width: 768px) {
    height: 93vh;
  }
`;

export const UserAvatar = styled.img`
  border: 2px solid #e2e2e2;
  border-radius: 161px;
  width: 80px;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    width: 187px;
    margin: 20px;
  }
`;
export const UserProfileName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #f8fafc;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    font-size: 48px;
    margin: 20px;
  }
`;
export const UserName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #f8fafc;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const UserBio = styled.p`
  font-size: 14px;
  color: #f8fafc;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    width: 682px;
  }
`;

export const UserInfoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
`;

export const InfoContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  order: ${(props) => (props.changeOrder ? 1 : 0)};
  @media screen and (min-width: 1024px) {
    order: 0;
  }
`;

export const InfoData = styled.p`
  font-size: 16px;
  color: #3b82f6;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const InfoAbout = styled.p`
  font-size: 12px;
  color: #f8fafc;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const Divider = styled.hr`
  height: 75px;
  border: 1px solid #64748b;
`;
