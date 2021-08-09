import { Component } from "react";
import {} from "./styledComponents";

class LoginPage extends Component {
  state = { username: "" };

  componentDidMount = () => {
    this.getAuthorization();
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  getAuthorization = async () => {
    const { username } = this.state;
    const options = {
      Authorization: `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 bearer`,
      method: "GET"
    };
    const url = `https://api.github.com/users/${username}`;
    const promise = await fetch(url, options);
    console.log(promise.status);
    const response = await promise.json();
    console.log(response);
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <input type="text" value={username} onChange={this.onChangeUsername} />
      </div>
    );
  }
}

export default LoginPage;
