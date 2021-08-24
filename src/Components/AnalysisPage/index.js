import { Component } from "react";
import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import LinearChart from "../CommitsPerQuater";
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
    this.setState({
      analysisInfo: analysisInfoData,
      apiStatus: apiStatusConstants.success
    });
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

    const response = await fetch(analysisUrl, {
      mode: "no-cors"
    });
    // const analysisInfoData = await response.json();
    console.log(response);
    if (response.ok) {
      console.log(response);
      const analysisInfoData = await response.json();
      this.onSuccessDataCollected(analysisInfoData);
    } else {
      this.onFailureDataCollected(true);
    }
  };
  renderAnalysisView = () => (
    <>
      <LinearChart />
      <CommitHistory />
    </>
  );
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
