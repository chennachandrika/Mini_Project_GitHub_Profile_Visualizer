import { FailureViewContainer, FailureViewLogo } from "./styledComponents";
import SomethingWentWrong from "../LoginPage/resources/SomethingWentWrong.png";
const FailureView = () => (
  <FailureViewContainer>
    <FailureViewLogo src={SomethingWentWrong} alt="something went wrong" />
  </FailureViewContainer>
);

export default FailureView;
