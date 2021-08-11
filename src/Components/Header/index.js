import { withRouter } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { RouterLink, NavbarBar, NavbarToggle } from "./styledComponents";

const Header = (props) => {
  const { history, match } = props;
  const { location } = history;
  const { pathname } = location;
  const { params } = match;
  const { user } = params;
  return (
    <NavbarBar sticky="top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Github Profile Visualizer</Navbar.Brand>
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
              issamepath={(pathname === `/${user}/repositories`).toString()}
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
