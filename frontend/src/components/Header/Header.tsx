import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-white py-3">
      <Container>
        {/* Logo e Nome da Marca */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/assets/icons/logo.svg"
            height="32"
            className="d-inline-block align-top me-2"
            alt="Furniro logo"
          />
          <span className="brand-name">Furniro</span>
        </Navbar.Brand>

        {/* Links de Navegação */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto  gap-5">
            <Nav.Link as={Link} to="/" className="link-nav">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="link-nav">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="link-nav">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="link-nav">
              Contact
            </Nav.Link>
          </Nav>

          {/* Ícones de Ação  */}
          <Nav className="gap-4">
            <Nav.Link href="#user">
              <img src="/assets/icons/account-alert-outline.svg" alt="User" />
            </Nav.Link>
            <Nav.Link href="#search">
              <img src="/assets/icons/search.svg" alt="Search" />
            </Nav.Link>
            <Nav.Link href="#wishlist">
              <img src="/assets/icons/heart.svg" alt="Wishlist" />
            </Nav.Link>
            <Nav.Link href="#cart">
              <img src="/assets/icons/shopping-cart.svg" alt="Cart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
