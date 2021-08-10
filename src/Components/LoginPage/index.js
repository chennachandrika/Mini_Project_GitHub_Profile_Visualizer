import { Component } from "react";
import cookie from "js-cookie";
import LoginPageLogo from "./resources/LoginPageLogo.png";
import {
  LoginPageContainer,
  LoginPageHeading,
  TextInput,
  LoginPageImage,
  ErrorMessage
} from "./styledComponents";

class LoginPage extends Component {
  state = { username: "", isUsernameInvalid: false };

  onChangeUsername = (event) => {
    if (event.key === "Enter") {
      this.usernameAuthentication();
    } else {
      this.setState({ username: event.target.value, isUsernameInvalid: false });
    }
  };

  onSuccessAuthenticate = (userData) => {
    const { username } = this.state;
    const { history } = this.props;
    console.log(history);
    const { id } = userData;
    cookie.set("awt_token", id);
    console.log(userData);
    history.replace(`/${username}/profile`);
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
    const { isUsernameInvalid } = this.state;
    return (
      <LoginPageContainer>
        <LoginPageHeading>Github Profile Visualizer</LoginPageHeading>
        <TextInput
          placeholder="Enter github username"
          type="text"
          isUsernameInvalid={isUsernameInvalid}
          onKeyUp={this.onChangeUsername}
        />
        <ErrorMessage>
          {isUsernameInvalid && "Enter the valid github username"}
        </ErrorMessage>
        <LoginPageImage src={LoginPageLogo} />
      </LoginPageContainer>
    );
  }
}

export default LoginPage;
