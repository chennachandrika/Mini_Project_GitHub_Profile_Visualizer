import { Component } from "react";
import Header from "../Header";
import RepositoryCard from "../RepositoryCard";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import RepositoryContributors from "../RepositoryContributors";
import RepositoryLanguagePieChart from "../RepositoryLanguagePieChart";
import {
  RepositoryItemPageContainer,
  RepositoryCardContainer,
  RepoPath,
  LinkTo,
  NextIcon,
  Text
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};

class RepositoryItemPage extends Component {
  state = { repoDetails: {}, apiStatus: apiStatusConstants.initial };
  componentDidMount = () => {
    this.getRepostoryData();
  };
  onSuccessDataCollected = async (repositoryData) => {
    this.setState(
      {
        repoDetails: {
          title: repositoryData.name,
          description: repositoryData.description,
          languagesUrl: repositoryData.languages_url,
          starsCount: repositoryData.stargazers_count,
          forksCount: repositoryData.forks_count,
          contributorsUrl: repositoryData.contributors_url,
          commits_url: repositoryData.commits_url,
          issues_url: repositoryData.repositoryData
        },
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
  getRepostoryData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user, repositoryName } = params;

    const repoUrl = `https://api.github.com/repos/${user}/${repositoryName}`;
    this.setState({
      apiStatus: apiStatusConstants.inProgress
    });

    const response = await fetch(repoUrl);

    if (response.ok) {
      const repositoryData = await response.json();
      this.onSuccessDataCollected(repositoryData);
    } else {
      this.onFailureDataCollected(true);
    }
  };
  renderRepositoryView = () => {
    const { repoDetails } = this.state;
    return (
      <RepositoryCardContainer>
        <RepositoryCard repoDetails={repoDetails} />
        <RepositoryContributors contributorsUrl={repoDetails.contributorsUrl} />
        <RepositoryLanguagePieChart languagesUrl={repoDetails.languagesUrl} />
      </RepositoryCardContainer>
    );
  };
  renderStatusView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoryView();
      case apiStatusConstants.failure:
        return <FailureView />;
      case apiStatusConstants.inProgress:
        return <LoadingView />;
      default:
        return null;
    }
  };
  render() {
    const { match } = this.props;
    const { params } = match;
    const { repositoryName, user } = params;
    return (
      <>
        <Header />
        <RepoPath>
          <LinkTo to={`/${user}/repositories`}>
            <Text>
              Repositories <NextIcon />
            </Text>
          </LinkTo>
          <Text>{repositoryName}</Text>
        </RepoPath>
        <RepositoryItemPageContainer>
          {this.renderStatusView()}
        </RepositoryItemPageContainer>
      </>
    );
  }
}

export default RepositoryItemPage;
