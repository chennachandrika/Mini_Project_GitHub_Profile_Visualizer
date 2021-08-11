import { Component } from "react";
import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import { ProfilePageContainer } from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};

class ProfilePage extends Component {
  state = { userData: "", apiStatus: apiStatusConstants.initial };
  componentDidMount = () => {
    this.getUserData();
  };

  onSuccessDataCollected = (userData) => {
    this.setState = { userData, apiStatus: apiStatusConstants.success };
  };

  onFailureDataCollected = () => {
    this.setState({
      apiStatus: apiStatusConstants.failure
    });
  };

  getUserData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const url = `https://api.github.com/users/${user}`;

    this.setState({
      apiStatus: apiStatusConstants.failure
    });

    const response = await fetch(url);

    if (response.ok) {
      const userData = await response.json();
      this.onSuccessDataCollected(userData);
    } else {
      this.onFailureDataCollected(true);
    }
  };

  renderProfileView = () => <p>Profile</p>;
  renderFailureView = () => <FailureView />;
  renderLoadingView = () => <LoadingView />;

  renderStatusView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        <ProfilePageContainer>{this.renderStatusView()}</ProfilePageContainer>
      </>
    );
  }
}
export default ProfilePage;
