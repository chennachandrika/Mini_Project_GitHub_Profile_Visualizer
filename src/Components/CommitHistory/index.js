import { Component } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import { withRouter } from "react-router-dom";

import "react-calendar-heatmap/dist/styles.css";
import "./styles.css";
import { CommitHistoryHeading } from "./styledComponents";

class CommitHistory extends Component {
  state = { commitsHistory: [] };
  componentDidMount = () => {
    this.getCommitHistory();
  };
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }
  getCommitHistory = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const url = `https://ttvxlp94z4.execute-api.ap-south-1.amazonaws.com/dev/github-commits?user=${user}`;
    const response = await fetch(url);
    const commitHistory = await response.json();
    const keysOfCommitHistory = Object.keys(commitHistory);

    this.setState({
      commitsHistory: keysOfCommitHistory.map((data) => ({
        date: new Date(data),
        count: commitHistory[data]
      }))
    });
  };
  render() {
    const { commitsHistory } = this.state;
    console.log(commitsHistory);
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 232); // Past six months from today
    return (
      <>
        <CommitHistoryHeading>Commit History</CommitHistoryHeading>

        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={commitsHistory}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-gitlab-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `Commits: ${value.count || 0}`
            };
          }}
          showWeekdayLabels={true}
        />

        <ReactTooltip />
      </>
    );
  }
}

export default withRouter(CommitHistory);
