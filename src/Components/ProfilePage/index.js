import { Component } from "react";
import Header from "../Header";
import FailureView from "../common/FailureView";
import LoadingView from "../common/LoadingView";
import {
  ProfilePageContainer,
  UserAvatar,
  UserProfileName,
  UserName,
  UserBio,
  UserInfoContainer,
  InfoContainer,
  InfoData,
  InfoAbout,
  Divider
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};

class ProfilePage extends Component {
  state = { userData: "", apiStatus: apiStatusConstants.initial };
  componentDidMount = () => {
    this.getUserData();
  };

  onSuccessDataCollected = (userData) => {
    this.setState({
      userData: {
        avatarUrl: userData.avatar_url,
        name: userData.name,
        username: userData.login,
        bio: userData.bio,
        followers: userData.followers,
        following: userData.following,
        publicRepos: userData.public_repos,
        company: userData.company,
        companyUrl: userData.html_url,
        location: userData.location
      },
      apiStatus: apiStatusConstants.success
    });
  };

  onFailureDataCollected = () => {
    this.setState({
      apiStatus: apiStatusConstants.failure
    });
  };

  getUserData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const url = `https://api.github.com/users/${user}`;

    this.setState({
      apiStatus: apiStatusConstants.inProgress
    });

    const response = await fetch(url);

    if (response.ok) {
      const userData = await response.json();
      this.onSuccessDataCollected(userData);
    } else {
      this.onFailureDataCollected(true);
    }
  };

  renderUserGitInfo = (userInfo) => {
    const { infoData, infoAbout } = userInfo;
    return (
      <InfoContainer key={infoAbout.toLowerCase()}>
        <InfoData>{infoData}</InfoData>
        <InfoAbout>{infoAbout}</InfoAbout>
      </InfoContainer>
    );
  };

  renderUserWorkAreaInfo = (userInfo) => {
    const { infoData, infoAbout } = userInfo;
    return (
      <InfoContainer
        changeOrder={infoData === "Company URL"}
        key={infoAbout.toLowerCase()}
      >
        <InfoData>{infoData}</InfoData>
        <InfoAbout>{infoAbout}</InfoAbout>
      </InfoContainer>
    );
  };

  renderProfileView = () => {
    const { userData } = this.state;
    console.log(userData);
    const {
      avatarUrl,
      name,
      username,
      bio,
      followers,
      following,
      publicRepos,
      company,
      companyUrl,
      location
    } = userData;
    return (
      <>
        <UserAvatar src={avatarUrl} />
        <UserProfileName>{name}</UserProfileName>
        <UserName>{username}</UserName>
        <UserBio>{bio}</UserBio>
        <UserInfoContainer>
          {this.renderUserGitInfo({
            infoData: followers,
            infoAbout: "FOLLOWERS"
          })}
          <Divider />
          {this.renderUserGitInfo({
            infoData: following,
            infoAbout: "FOLLOWING"
          })}
          <Divider />
          {this.renderUserGitInfo({
            infoData: publicRepos,
            infoAbout: "PUBLIC REPOS"
          })}
        </UserInfoContainer>
        <UserInfoContainer>
          {this.renderUserWorkAreaInfo({
            infoAbout: company,
            infoData: "Company"
          })}
          {this.renderUserWorkAreaInfo({
            infoAbout: companyUrl,
            infoData: "Company URL"
          })}
          {this.renderUserWorkAreaInfo({
            infoAbout: location,
            infoData: "Location"
          })}
        </UserInfoContainer>
      </>
    );
  };
  renderFailureView = () => <FailureView />;
  renderLoadingView = () => <LoadingView />;

  renderStatusView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileView();
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
      <ProfilePage>
        <Header />
        <ProfilePageContainer>{this.renderStatusView()}</ProfilePageContainer>
      </ProfilePage>
    );
  }
}
export default ProfilePage;
