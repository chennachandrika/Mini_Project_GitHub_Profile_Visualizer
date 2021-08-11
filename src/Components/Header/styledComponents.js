import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarBar = styled(Navbar)`
  background-color: #0f172a;
`;

export const NavbarBrand = styled(Navbar.Brand)`
  font-size: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const RouterLink = styled(Link)`
  text-decoration: none;
  padding-right: 10px;
  color: ${(props) => (props.issamepath === "true" ? "#3B82F6" : "#F8FAFC")};
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  outline: none;
  :focus {
    outline: none;
    box-shadow: none;
  }
`;
