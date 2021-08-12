import {
  FailureViewContainer,
  FailureViewLogo,
  FailureText,
  TryAgainButton
} from "./styledComponents";

const FailureView = () => {
  const tryAgain = () => {
    window.location.reload();
  };
  return (
    <FailureViewContainer>
      <FailureViewLogo
        src="https://rawcdn.githack.com/chennachandrika/Mini_Project_Task_Flow_Manager/aff08ba65374b593c22bf3b26e9894ec8f812112/src/Components/LoginPage/resources/SomthingWentWrong.png"
        alt="something went wrong"
      />
      <FailureText>Something went wrong. Please try again</FailureText>
      <TryAgainButton onClick={tryAgain}>Try Again</TryAgainButton>
    </FailureViewContainer>
  );
};

export default FailureView;
