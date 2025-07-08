import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export function Footer() {
  return (
    <div className="footer-section pt-5 d-flex gap-5">
      <Container className="py-5">
        <Row>
          {/* Coluna da Marca e Endereço */}
          <Col lg={3} md={6} className="mb-5 pe-5">
            <h4 className="footer-brand">Furniro.</h4>
            <p className="footer-address">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </Col>

          {/* Coluna de Links */}
          <Col lg={2} md={6} className="mb-5">
            <h5 className="footer-col-title">Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="footer-nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/shop" className="footer-nav-link">
                Shop
              </Nav.Link>
              <Nav.Link href="#" className="footer-nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#" className="footer-nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Coluna de Ajuda */}
          <Col lg={3} md={6} className="mb-5">
            <h5 className="footer-col-title">Help</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="footer-nav-link">
                Payment Options
              </Nav.Link>
              <Nav.Link href="#" className="footer-nav-link">
                Returns
              </Nav.Link>
              <Nav.Link href="#" className="footer-nav-link">
                Privacy Policies
              </Nav.Link>
            </Nav>
          </Col>

          {/* Coluna da Newsletter */}
          <Col lg={4} md={6} className="mb-5">
            <h5 className="footer-col-title">Newsletter</h5>
            <Form className="d-flex align-items-center">
              <FormControl
                type="email"
                placeholder="Enter Your Email Address"
                className="newsletter-input me-3"
              />
              <Button variant="link" className="newsletter-button">
                SUBSCRIBE
              </Button>
            </Form>
          </Col>
        </Row>
        <hr />
        <p className="mt-4">2023 furino. All rights reserved</p>
      </Container>
    </div>
  );
}
