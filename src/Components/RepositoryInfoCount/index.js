import { Component } from "react";
import {
  RepoInfoContainer,
  InfoContainer,
  CountInfo,
  CountAbout
} from "./styledComponents";

class RepositoryInfoCount extends Component {
  state = { commitsCount: 0 };
  componentDidMount = () => {
    this.getRepositoryInfoCount();
  };
  getRepositoryInfoCount = async () => {
    let { commitsUrl } = this.props;

    const response = await fetch(commitsUrl.slice(0, -6));
    if (response.ok) {
      const commitsCount = await response.json();
      this.setState({ commitsCount: commitsCount.length });
    }
  };
  getInfoUI = (countAbout, countInfo) => {
    const info = countInfo <= 9 ? `0${countInfo}` : countInfo;
    return (
      <InfoContainer key={countAbout}>
        <CountAbout>{countAbout}</CountAbout>
        <CountInfo>{info}</CountInfo>
      </InfoContainer>
    );
  };
  render() {
    const { commitsCount } = this.state;
    const { openIssuesCount } = this.props;
    return (
      <RepoInfoContainer>
        {this.getInfoUI("Commits Count", commitsCount)}
        {this.getInfoUI("Issues Count", openIssuesCount)}
      </RepoInfoContainer>
    );
  }
}

export default RepositoryInfoCount;
