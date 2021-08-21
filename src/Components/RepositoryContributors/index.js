import { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  RepositoryContributorsContainer,
  RepoContributorsHeading,
  ContributorsList,
  ContributorsAvatar
} from "./styledComponents";
class RepositoryContributors extends Component {
  state = { contributors: [] };
  componentDidMount() {
    this.getRepositoryContributors();
  }
  getRepositoryContributors = async () => {
    const { contributorsUrl } = this.props;
    const options = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    const response = await fetch(contributorsUrl, options);
    const contributors = await response.json();
    this.setState({ contributors });
  };

  renderRepositoryContributors = () => {
    const { contributors } = this.state;
    console.log(contributors);
    return (
      <ContributorsList>
        {contributors.map((contributor) => (
          <ContributorsAvatar
            key={contributor.id}
            src={contributor.avatar_url}
            alt={contributor.login}
          />
        ))}
      </ContributorsList>
    );
  };

  render() {
    return (
      <RepositoryContributorsContainer>
        <RepoContributorsHeading>Contributors :</RepoContributorsHeading>
        {this.renderRepositoryContributors()}
      </RepositoryContributorsContainer>
    );
  }
}

export default withRouter(RepositoryContributors);
