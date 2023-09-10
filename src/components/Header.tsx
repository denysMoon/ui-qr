import React from "react";
import { ROUTES } from "../constants";
import { CustomLink } from "./CustomLink";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">QR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {ROUTES.map((route) => {
              return (
                <CustomLink key={route.path} to={route.path}>
                  {route.name}
                </CustomLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
