import { withRouter } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  RouterLink,
  NavbarBar,
  NavbarBrand,
  NavbarToggle
} from "./styledComponents";

const Header = (props) => {
  const { history, match } = props;
  const { location } = history;
  const { pathname } = location;
  const { params } = match;
  const { user, repositoryName } = params;

  return (
    <NavbarBar sticky="top" variant="dark" expand="lg">
      <Container>
        <NavbarBrand>Github Profile Visualizer</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="ml-auto">
            <RouterLink
              to={`/${user}/profile`}
              issamepath={(pathname === `/${user}/profile`).toString()}
            >
              Profile
            </RouterLink>
            <RouterLink
              to={`/${user}/repositories`}
              issamepath={(
                pathname === `/${user}/repositories` ||
                pathname === `/${user}/repository/${repositoryName}`
              ).toString()}
            >
              Repositories
            </RouterLink>
            <RouterLink
              to={`/${user}/analysis`}
              issamepath={(pathname === `/${user}/analysis`).toString()}
            >
              Analysis
            </RouterLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarBar>
  );
};

export default withRouter(Header);
