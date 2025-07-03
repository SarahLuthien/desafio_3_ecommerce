import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-white py-4">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/assets/icons/logo.svg"
            width="50"
            height="32"
            className="d-inline-block align-top me-2"
            alt="Furniro logo"
          />
          <span className="brand-name">Furniro</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
