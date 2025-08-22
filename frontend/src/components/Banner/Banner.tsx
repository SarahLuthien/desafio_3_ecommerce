import { Button, Container } from "react-bootstrap";

export function Banner() {
  return (
    <div className="banner-container">
      <Container className="d-flex justify-content-end  align-items-center">
        <div className="banner-content flex text-right text-md-end p-3 p-md-5">
          <p className="fw-semibold mb-1">New Arrival</p>
          <h1 className="banner-title mb-1 fs-1">
            Discover Our New Collection
          </h1>
          <p className="banner-subtitle mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <Button
            size="lg"
            className="banner-button text-uppercase fw-medium p-3 px-4 p-md-3 px-md-5 fs-sm-6 fs-6"
          >
            Buy Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
