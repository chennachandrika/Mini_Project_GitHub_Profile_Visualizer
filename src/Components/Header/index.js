import { withRouter } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { RouterLink } from "./styledComponents";

const Header = (props) => {
  const { history } = props;
  const { location } = history;
  const { pathname } = location;

  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Github Profile Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="ml-auto">
            <RouterLink
              to="/profile"
              issamepath={(pathname === "/profile").toString()}
            >
              Profile
            </RouterLink>
            <RouterLink
              to="/repositories"
              issamepath={(pathname === "/repositories").toString()}
            >
              Repositories
            </RouterLink>
            <RouterLink
              to="/analysis"
              issamepath={(pathname === "/analysis").toString()}
            >
              Analysis
            </RouterLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Header);
