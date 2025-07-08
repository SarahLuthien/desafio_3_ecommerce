import { Container } from "react-bootstrap";

export function Banner() {
  return (
    <div className="banner-container">
      <Container className="h-100 d-flex justify-content-end align-items-center">
        <div className="banner-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
      </Container>
    </div>
  );
}
