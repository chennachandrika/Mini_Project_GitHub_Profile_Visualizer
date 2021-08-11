import NotFoundViewImg from "../LoginPage/resources/NotFoundViewImg.png";
import {
  NotFoundViewContainer,
  NotFoundViewLogo,
  Heading,
  Text,
  GoBackButton
} from "./styledComponents";

const NotFoundView = () => (
  <NotFoundViewContainer>
    <NotFoundViewLogo src={NotFoundViewImg} alt="not found" />
    <Heading>PAGE NOT FOUND</Heading>
    <Text>
      we're sorry, the page you requested could not be found please go back to
      home
    </Text>
    <GoBackButton>Go Back</GoBackButton>
  </NotFoundViewContainer>
);

export default NotFoundView;
