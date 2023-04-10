import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarHeader() {
  const navList = ["Home", "About", "Offers", "Order", "Story"];
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            {navList.map((navItem) => {
              return <Nav.Link href={`#${navItem}`}> {navItem} </Nav.Link>;
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
