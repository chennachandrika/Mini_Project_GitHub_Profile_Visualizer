import { Component } from "react";
import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import { RepositoriesPageContainer, Heading } from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};
class RepositoriesPage extends Component {
  state = { repositoriesData: "", apiStatus: apiStatusConstants.initial };
  componentDidMount = () => {
    this.getRepostoriesData();
  };

  onSuccessDataCollected = (repositoriesData) => {
    console.log(repositoriesData);
    this.setState({
      repositoriesData,
      apiStatus: apiStatusConstants.success
    });
  };

  onFailureDataCollected = () => {
    this.setState({
      apiStatus: apiStatusConstants.failure
    });
  };

  getRepostoriesData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const url = `https://api.github.com/users/${user}/repos`;

    this.setState({
      apiStatus: apiStatusConstants.inProgress
    });

    const response = await fetch(url);

    if (response.ok) {
      const repositoriesData = await response.json();
      this.onSuccessDataCollected(repositoriesData);
    } else {
      this.onFailureDataCollected(true);
    }
  };

  renderRepositoriesView = () => {};

  renderFailureView = () => <FailureView />;
  renderLoadingView = () => <LoadingView />;

  renderStatusView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoriesView();
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
        <RepositoriesPageContainer>
          <Heading>Repositories</Heading>
          {this.renderStatusView()}
        </RepositoriesPageContainer>
      </>
    );
  }
}

export default RepositoriesPage;
