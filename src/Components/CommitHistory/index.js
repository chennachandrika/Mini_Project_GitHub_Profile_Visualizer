import { Component } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import { withRouter } from "react-router-dom";

import "react-calendar-heatmap/dist/styles.css";
import "./styles.css";
import { CommitHistoryHeading } from "./styledComponents";
const sampleDates = [
  {
    date: new Date("2021-07-17"),
    count: 5
  },
  {
    date: new Date("2021-04-26"),
    count: 2
  },
  {
    date: new Date("2021-04-28"),
    count: 4
  },
  {
    date: new Date("2021-06-28"),
    count: 2
  },
  {
    date: new Date("2021-01-28"),
    count: 1
  }
];
class CommitHistory extends Component {
  state = { commitsHistory: [] };
  componentDidMount = () => {
    this.getCommitHistory();
  };
  getCommitHistory = async () => {
    const { match } = this.props;
    const { params } = match;
    const { user } = params;
    const url = `'https://ttvxlp94z4.execute-api.ap-south-1.amazonaws.com/dev/github-commits?user=${user}'`;
    const response = await fetch(url);
    const commitHistory = await response.json();
    this.setState({
      commitsHistory: commitHistory.map((data) => ({
        date: new Date(Object.keys(data)),
        count: Object.value(data)
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
      <div>
        <CommitHistoryHeading>Commit history</CommitHistoryHeading>

        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={sampleDates}
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
      </div>
    );
  }
}

export default withRouter(CommitHistory);
