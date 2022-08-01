import { Container, Nav, NavLink } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="p-3">
      <Container className="d-flex justify-content-between align-items-center">
        <h4>Footer</h4>
        <Nav className="">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
}
