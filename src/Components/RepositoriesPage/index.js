import { Component } from "react";
import NoData from "../LoginPage/resources/NoData.png";

import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import RepositoryCard from "../RepositoryCard";
import Pagination from "../Pagination";

import {
  RepositoriesPageContainer,
  Heading,
  DataNotFoundViewContainer,
  DataNotFoundViewLogo,
  NoDataHeading
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
  state = {
    repositoriesData: "",
    currentPage: initialPageNumber,
    totalPages: "",
    apiStatus: apiStatusConstants.initial
  };

  componentDidMount = () => {
    this.getRepostoriesData();
  };

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

  gotoNextPage = () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      this.setState(
        (prevState) => ({
          currentPage: prevState.currentPage + 1
        }),
        this.getRepostoriesData
      );
    }
  };
  gotoPrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 0) {
      this.setState(
        (prevState) => ({
          currentPage: prevState.currentPage - 1
        }),
        this.getRepostoriesData
      );
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

  renderRepositoriesView = () => {
    const { repositoriesData, totalPages, currentPage } = this.state;
    if (repositoriesData.length === 0) {
      return this.renderNoRespositoriesView();
    }
    return (
      <>
        <Heading>Repositories</Heading>
        {repositoriesData.map((repoDetails) => (
          <RepositoryCard
            key={`repos-${Math.random()}-${repoDetails.title}`}
            repoDetails={repoDetails}
          />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          gotoPrevPage={this.gotoPrevPage}
          gotoNextPage={this.gotoNextPage}
        />
      </>
    );
  };

  renderStatusView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoriesView();
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
        <RepositoriesPageContainer>
          {this.renderStatusView()}
        </RepositoriesPageContainer>
      </>
    );
  }
}

export default RepositoriesPage;
