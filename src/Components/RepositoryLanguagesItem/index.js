import { Component } from "react";
import { LanguageText } from "./styledComponents";

const textColors = [
  "#E879F9",
  "#4ADE80",
  "#38BDF8",
  "#F472B6",
  "#FBBF24",
  "#C084FC"
];

class RepositoryLanguagesItem extends Component {
  state = { languagesList: [] };
  componentDidMount = () => {
    this.getLanguages();
  };
  getLanguages = async () => {
    const { languagesUrl } = this.props;
    const response = await fetch(languagesUrl);
    const languages = await response.json();
    this.setState({ languagesList: [...Object.keys(languages)] });
  };
  render() {
    const { languagesList } = this.state;

    return (
      <>
        {languagesList.map((item) => (
          <LanguageText
            bgColor={textColors[Math.floor(Math.random() * textColors.length)]}
          >
            {item}
          </LanguageText>
        ))}
      </>
    );
  }
}

export default RepositoryLanguagesItem;
