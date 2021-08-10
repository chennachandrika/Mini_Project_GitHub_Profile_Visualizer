import { Component } from "react";
import Header from "../Header";
import { ProfilePageContainer } from "./styledComponents";

class ProfilePage extends Component {
  state = { userData: "" };
  componentDidMount = () => {
    this.getUserData();
  };
  getUserData = () => {};
  render() {
    return (
      <>
        <Header />
        <ProfilePageContainer>Hi</ProfilePageContainer>
      </>
    );
  }
}
export default ProfilePage;
