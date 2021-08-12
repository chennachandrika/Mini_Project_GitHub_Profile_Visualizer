import { Component } from "react";
import NoData from "../LoginPage/resources/NoData.png";
import Git from "../LoginPage/resources/Git.png";
import Star from "../LoginPage/resources/Star.png";
import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import {
  RepositoriesPageContainer,
  Heading,
  DataNotFoundViewContainer,
  DataNotFoundViewLogo,
  NoDataHeading,
  RepositoryCard,
  RepositoryTitle,
  RepositoryDescription,
  RepositoryLanguages,
  RepositoryInfo,
  RepositoryInfoContainer,
  RepositoryInfoCount,
  RepositoryInfoIcon
} from "./styledComponents";

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

  getTheLanauges = async (url) => {
    const response = await fetch(url);
    const listOfLanguages = await response.json();
    return [...Object.keys(listOfLanguages)];
  };

  onSuccessDataCollected = async (repositoriesData) => {
    this.setState({
      repositoriesData: repositoriesData.map((repositoriesData) => ({
        title: repositoriesData.name,
        description: repositoriesData.description,
        languages: repositoriesData.language,
        starsCount: repositoriesData.stargazers_count,
        forksCount: repositoriesData.forks_count
      })),
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

  renderNoRespositoriesView = () => (
    <DataNotFoundViewContainer>
      <DataNotFoundViewLogo src={NoData} alt="data not found" />
      <NoDataHeading>No Repositories Found!</NoDataHeading>
    </DataNotFoundViewContainer>
  );

  repositoryCard = (repoDetails) => {
    const {
      title,
      description,
      languages,
      starsCount,
      forksCount
    } = repoDetails;

    return (
      <RepositoryCard
        key={`repos-${Math.random()}-${title}`}
        to={`/Repositories/${title}`}
      >
        <RepositoryTitle>{title}</RepositoryTitle>
        <RepositoryDescription>{description}</RepositoryDescription>
        <RepositoryLanguages>{languages}</RepositoryLanguages>
        <RepositoryInfo>
          <RepositoryInfoContainer>
            <RepositoryInfoIcon src={Star} alt="git star icon" />
            <RepositoryInfoCount>{starsCount}</RepositoryInfoCount>
          </RepositoryInfoContainer>
          <RepositoryInfoContainer>
            <RepositoryInfoIcon src={Git} alt="git fork icon" />
            <RepositoryInfoCount>{forksCount}</RepositoryInfoCount>
          </RepositoryInfoContainer>
        </RepositoryInfo>
      </RepositoryCard>
    );
  };

  renderRepositoriesView = () => {
    const { repositoriesData } = this.state;
    if (repositoriesData.length === 0) {
      return this.renderNoRespositoriesView();
    }
    return (
      <>
        <Heading>Repositories</Heading>
        {repositoriesData.map((repoDetails) =>
          this.repositoryCard(repoDetails)
        )}
      </>
    );
  };

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
          {this.renderStatusView()}
        </RepositoriesPageContainer>
      </>
    );
  }
}

export default RepositoriesPage;
