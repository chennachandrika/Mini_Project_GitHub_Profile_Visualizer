import { Component } from "react";
import RepositoryCard from "../RepositoryCard";

class RepositoryItemPage extends Component {
  render() {
    const { repoDetails } = this.state;
    return <RepositoryCard repoDetails={repoDetails} />;
  }
}

export default RepositoryItemPage;
