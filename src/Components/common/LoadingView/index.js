import Loader from "react-loader-spinner";
import { LoadingViewContianer } from "./styledComponents";

const LoadingView = () => (
  <LoadingViewContianer>
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </LoadingViewContianer>
);

export default LoadingView;
