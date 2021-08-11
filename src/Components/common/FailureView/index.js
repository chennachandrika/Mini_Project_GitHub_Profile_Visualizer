import {
  FailureViewContainer,
  FailureViewLogo,
  FailureText,
  TryAgainButton
} from "./styledComponents";
import SomethingWentWrong from "../LoginPage/resources/SomethingWentWrong.png";
const FailureView = () => (
  <FailureViewContainer>
    <FailureViewLogo src={SomethingWentWrong} alt="something went wrong" />
    <FailureText>Something went wrong. Please try again</FailureText>
    <TryAgainButton>Try Again</TryAgainButton>
  </FailureViewContainer>
);

export default FailureView;
