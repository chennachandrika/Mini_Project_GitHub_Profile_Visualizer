import { Component } from "react";
import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import CommitHistory from "../CommitHistory";
import { AnalysisPageContainer } from "./styledComponents";
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};

class AnalysisPage extends Component {
  state = { apiStatus: apiStatusConstants.success, analysisInfo: {} };
  componentDidMount = () => {
    // this.getAnalysisInfo();
  };
  onSuccessDataCollected = async (analysisInfoData) => {
    console.log(analysisInfoData);
    this.setState(
      {
        analysisInfo: analysisInfoData,
        apiStatus: apiStatusConstants.success
      },
      this.getTheCountOfRepos
    );
  };
  onFailureDataCollected = () => {
    this.setState({
      apiStatus: apiStatusConstants.failure
    });
  };
  getAnalysisInfo = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;

    const analysisUrl = `https://profile-summary-for-github.com/api/user/${user}`;
    this.setState({
      apiStatus: apiStatusConstants.inProgress
    });
    const option = {
      method: "GET"
    };
    const response = await fetch(analysisUrl, option);

    if (response.ok) {
      console.log(response);
      const analysisInfoData = await response.json();
      this.onSuccessDataCollected(analysisInfoData);
    } else {
      this.onFailureDataCollected(true);
    }
  };
  renderAnalysisView = () => <CommitHistory />;
  renderStatusView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAnalysisView();
      case apiStatusConstants.failure:
        return <FailureView />;
      case apiStatusConstants.inProgress:
        return <LoadingView />;
      default:
        return null;
    }
  };
  render() {
    return (
      <>
        <Header />
        <AnalysisPageContainer>{this.renderStatusView()}</AnalysisPageContainer>
      </>
    );
  }
}

export default AnalysisPage;
