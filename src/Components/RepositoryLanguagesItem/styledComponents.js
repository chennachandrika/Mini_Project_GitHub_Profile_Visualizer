import styled from "styled-components";

const backgroundColors = {
  "#E879F9": "rgba(192, 38, 211, 0.16)",
  "#4ADE80": "rgba(34, 197, 94, 0.16)",
  "#38BDF8": "rgba(2, 132, 199, 0.16)",
  "#F472B6": "rgba(219, 39, 119, 0.16)",
  "#FBBF24": "rgba(245, 158, 11, 0.16)",
  "#C084FC": "rgba(147, 51, 234, 0.16)"
};

export const LanguageText = styled.p`
  margin: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${(props) => props.bgColor};
  background-color: ${(props) => backgroundColors[props.bgColor]};
`;
