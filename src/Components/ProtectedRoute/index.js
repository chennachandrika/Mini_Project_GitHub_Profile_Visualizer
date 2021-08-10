import { Redirect, Route } from "react-router-dom";
import cookie from "js-cookie";

const ProtectedRoute = (props) => {
  const user_access_token = cookie.get("awt_token");
  if (user_access_token) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
