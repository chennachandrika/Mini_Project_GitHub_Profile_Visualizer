import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import PageNotFound from "./Components/PageNotFound";
// import ProtectedRoute from "./Components/ProtectedRoute";
import ProfilePage from "./Components/ProfilePage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
