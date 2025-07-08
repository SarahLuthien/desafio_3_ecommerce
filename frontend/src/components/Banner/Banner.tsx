import { Button, Container } from "react-bootstrap";

export function Banner() {
  return (
    <div className="banner-container">
      <Container className="h-100 d-flex justify-content-end align-items-center">
        <div className="banner-content">
          <p className="fw-bold mb-1">New Arrival</p>
          <h1 className="banner-title">Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button size="lg" className="banner-button text-uppercase">
            Buy Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
