import { Component } from "react";
import NoData from "../LoginPage/resources/NoData.png";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import RepositoryLanguagesItem from "../RepositoryLanguagesItem";
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
  RepositoryInfoIcon,
  PaginationContainer,
  PaginationButton,
  PaginationPages
} from "./styledComponents";
const reposPerPage = 3;
const initialPageNumber = 1;
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};
class RepositoriesPage extends Component {
  // _isMounted = false;
  state = {
    repositoriesData: "",
    currentPage: initialPageNumber,
    totalPages: "",
    apiStatus: apiStatusConstants.initial
  };

  componentDidMount = () => {
    // this._isMounted = true;
    this.getRepostoriesData();
  };
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }
  onSuccessDataCollected = async (repositoriesData) => {
    this.setState(
      {
        repositoriesData: repositoriesData.map((repositoriesData) => ({
          title: repositoriesData.name,
          description: repositoriesData.description,
          languagesUrl: repositoriesData.languages_url,
          starsCount: repositoriesData.stargazers_count,
          forksCount: repositoriesData.forks_count
        })),
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

  getRepostoriesData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const { currentPage } = this.state;

    const reposUrl = `https://api.github.com/users/${user}/repos?page=${currentPage}&per_page=3`;
    this.setState({
      apiStatus: apiStatusConstants.inProgress
    });

    const response = await fetch(reposUrl);

    if (response.ok) {
      const repositoriesData = await response.json();
      this.onSuccessDataCollected(repositoriesData);
    } else {
      this.onFailureDataCollected(true);
    }
  };

  getTheCountOfRepos = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const url = `https://api.github.com/users/${user}/repos`;
    const response = await fetch(url);
    const reposList = await response.json();
    const remain = reposList.length % reposPerPage;
    const totalPagesCount = remain ? 1 : 0;
    this.setState({
      totalPages: totalPagesCount + Math.floor(reposList.length / reposPerPage)
    });
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
      languagesUrl,
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

        <RepositoryLanguages>
          <RepositoryLanguagesItem languagesUrl={languagesUrl} />
        </RepositoryLanguages>
        <RepositoryInfo>
          <RepositoryInfoContainer>
            <RepositoryInfoIcon
              src="https://uploads.codesandbox.io/uploads/user/3b4bf1a2-79b9-4319-933d-c5a16235ae34/SO7Q-Star.png"
              alt="git star icon"
            />
            <RepositoryInfoCount>{starsCount}</RepositoryInfoCount>
          </RepositoryInfoContainer>
          <RepositoryInfoContainer>
            <RepositoryInfoIcon
              src="https://uploads.codesandbox.io/uploads/user/3b4bf1a2-79b9-4319-933d-c5a16235ae34/1asD-Git.png"
              alt="git fork icon"
            />
            <RepositoryInfoCount>{forksCount}</RepositoryInfoCount>
          </RepositoryInfoContainer>
        </RepositoryInfo>
      </RepositoryCard>
    );
  };

  renderPagination = () => {
    const { currentPage, totalPages } = this.state;
    const nextPage = () => {
      if (currentPage < totalPages) {
        this.setState(
          (prevState) => ({
            currentPage: prevState.currentPage + 1
          }),
          this.getRepostoriesData
        );
      }
    };
    const prevPage = () => {
      if (currentPage > 0) {
        this.setState(
          (prevState) => ({
            currentPage: prevState.currentPage - 1
          }),
          this.getRepostoriesData
        );
      }
    };
    return (
      <PaginationContainer>
        <PaginationButton onClick={prevPage} type="button">
          <KeyboardArrowLeftIcon style={{ color: "white" }} />
        </PaginationButton>
        <PaginationPages>{`${currentPage} of ${totalPages}`}</PaginationPages>
        <PaginationButton onClick={nextPage} type="button">
          <KeyboardArrowRightIcon style={{ color: "white" }} />
        </PaginationButton>
      </PaginationContainer>
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
        {this.renderPagination()}
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
