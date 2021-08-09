import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const user_access_token = Cookies.get("awt_token");
  if (user_access_token) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
