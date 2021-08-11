import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import NotFoundView from "./Components/common/NotFoundView";
// import ProtectedRoute from "./Components/ProtectedRoute";
import ProfilePage from "./Components/ProfilePage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/:user/profile" component={ProfilePage} />
        <Route exact path="/:user/repositories" component={ProfilePage} />
        <Route exact path="/:user/analysis" component={ProfilePage} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
}
