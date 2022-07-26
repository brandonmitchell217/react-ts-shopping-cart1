import { Container, Button, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Header() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <BsNavbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container className="d-flex">
        <Nav className="me-auto">
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
        {cartQuantity > 0 ? (
          <Button
            onClick={openCart}
            variant="outline-primary"
            className="well shadow-sm"
            style={{ color: "red", fontWeight: "bold" }}
          >
            {cartQuantity}
          </Button>
        ) : (
          <Button
            onClick={openCart}
            variant="outline-primary"
            className="well shadow-sm"
            style={{ color: "red", fontWeight: "bold" }}
          >
            0
          </Button>
        )}
      </Container>
    </BsNavbar>
  );
}
