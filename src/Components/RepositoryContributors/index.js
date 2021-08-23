import { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  RepositoryContributorsContainer,
  RepoContributorsHeading,
  ContributorsList,
  ContributorsAvatar,
  ContributorsCount,
  ContributorsCountPresent
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
    return (
      <>
        <RepoContributorsHeading>Contributors :</RepoContributorsHeading>
        <ContributorsCount>{`${contributors.length} Members`}</ContributorsCount>
        <ContributorsList>
          {contributors.map((contributor, index) => {
            if (index <= 4) {
              return (
                <ContributorsAvatar
                  key={contributor.id}
                  src={contributor.avatar_url}
                  alt={contributor.login}
                />
              );
            }
            return "";
          })}
          {contributors.length > 5 && (
            <ContributorsCountPresent>
              {`+${contributors.length - 5}`}
            </ContributorsCountPresent>
          )}
        </ContributorsList>
      </>
    );
  };

  render() {
    return (
      <RepositoryContributorsContainer>
        {this.renderRepositoryContributors()}
      </RepositoryContributorsContainer>
    );
  }
}

export default withRouter(RepositoryContributors);
