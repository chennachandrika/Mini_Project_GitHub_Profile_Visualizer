import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarBar = styled(Navbar)`
  background-color: #0f172a;
`;

export const RouterLink = styled(Link)`
  text-decoration: none;
  padding-right: 10px;
  color: ${(props) => (props.issamepath === "true" ? "#3B82F6" : "#F8FAFC")};
`;
