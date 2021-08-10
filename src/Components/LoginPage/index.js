import { Component } from "react";
import cookie from "js-cookie";
import UserDataContext from "../../Context/UserDataContext";
import LoginPageLogo from "./resources/LoginPageLogo.png";
import {
  LoginPageContainer,
  LoginPageHeading,
  TextInput,
  LoginPageImage
} from "./styledComponents";

class LoginPage extends Component {
  state = { username: "", gitUserData: [], isUsernameInvalid: false };

  onChangeUsername = (event) => {
    if (event.key === "Enter") {
      this.usernameAuthentication();
    } else {
      this.setState({ username: event.target.value });
    }
  };

  onSuccessAuthenticate = (userData) => {
    const { history } = this.props;
    const { id } = userData;
    this.setState({ gitUserData: userData });
    cookie.set("awt_token", id);
    history.replace("/profile");
  };

  onFailureAuthenticate = (error) => {
    this.setState({ isUsernameInvalid: error, username: "" });
  };

  usernameAuthentication = async () => {
    const { username } = this.state;
    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    if (response.ok) {
      const userData = await response.json();
      this.onSuccessAuthenticate(userData);
    } else {
      this.onFailureAuthenticate(true);
    }
  };

  render() {
    const { gitUserData, isUsernameInvalid } = this.state;
    return (
      <UserDataContext.Provider
        value={{
          UserGitData: gitUserData
        }}
      >
        <LoginPageContainer>
          <LoginPageHeading>Github Profile Visualizer</LoginPageHeading>
          <TextInput
            placeholder="Enter github username"
            type="text"
            isUsernameInvalid={isUsernameInvalid}
            onKeyUp={this.onChangeUsername}
          />
          <LoginPageImage src={LoginPageLogo} />
        </LoginPageContainer>
      </UserDataContext.Provider>
    );
  }
}

export default LoginPage;
