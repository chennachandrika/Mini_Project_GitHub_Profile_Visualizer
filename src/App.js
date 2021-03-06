import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import NotFoundView from "./Components/common/NotFoundView";
// import ProtectedRoute from "./Components/ProtectedRoute";
import ProfilePage from "./Components/ProfilePage";
import RepositoriesPage from "./Components/RepositoriesPage";
import RepositoryItemPage from "./Components/RepositoryItemPage";
import AnalysisPage from "./Components/AnalysisPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/:user/profile" component={ProfilePage} />
        <Route exact path="/:user/repositories" component={RepositoriesPage} />
        <Route
          exact
          path="/:user/repository/:repositoryName"
          component={RepositoryItemPage}
        />
        <Route exact path="/:user/analysis" component={AnalysisPage} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
}
