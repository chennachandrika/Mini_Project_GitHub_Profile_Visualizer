import { Component } from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
  PaginationContainer,
  PaginationButton,
  PaginationPages
} from "./styledComponents";

class Pagination extends Component {
  state = { currentPage: 1 };
  nextPage = () => {
    const { gotoNextPage } = this.props;
    gotoNextPage();
  };
  prevPage = () => {
    const { gotoPrevPage } = this.props;
    gotoPrevPage();
  };
  render() {
    const { totalPages, currentPage } = this.props;
    return (
      <PaginationContainer>
        <PaginationButton onClick={this.prevPage} type="button">
          <KeyboardArrowLeftIcon style={{ color: "white" }} />
        </PaginationButton>
        <PaginationPages>{`${currentPage} of ${totalPages}`}</PaginationPages>
        <PaginationButton onClick={this.nextPage} type="button">
          <KeyboardArrowRightIcon style={{ color: "white" }} />
        </PaginationButton>
      </PaginationContainer>
    );
  }
}

export default Pagination;
