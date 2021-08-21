import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import { LanguagesHeading } from "./styledComponents";
const textColors = [
  "#E879F9",
  "#4ADE80",
  "#38BDF8",
  "#F472B6",
  "#FBBF24",
  "#C084FC"
];

class RepositoryLanguagePieChart extends Component {
  state = { languagesList: [] };

  componentDidMount = () => {
    this.getLanguages();
  };
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  getLanguages = async () => {
    const { languagesUrl } = this.props;
    const response = await fetch(languagesUrl);
    const languages = await response.json();
    const languagesInfo = [...Object.entries(languages)];
    this.setState({
      languagesList: languagesInfo.map((item) => ({
        language: item[0],
        count: item[1]
      }))
    });
  };
  render() {
    const { languagesList } = this.state;

    return (
      <>
        <LanguagesHeading>Languages :</LanguagesHeading>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="40%"
              data={languagesList}
              startAngle={0}
              endAngle={360}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              {languagesList.map((item, index) => (
                <Cell
                  key={item.language}
                  name={item.language}
                  fill={textColors[index]}
                />
              ))}
            </Pie>
            <Legend
              iconType="square"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default withRouter(RepositoryLanguagePieChart);
