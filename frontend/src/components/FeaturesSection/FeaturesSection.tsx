import { Container, Row, Col } from "react-bootstrap";

export function FeaturesSection() {
  const features = [
    {
      iconUrl: "/assets/icons/trophy.svg",
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      iconUrl: "/assets/icons/group.svg",
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      iconUrl: "/assets/icons/shipping.svg",
      title: "Free Shipping",
      subtitle: "Order over 150 $",
    },
    {
      iconUrl: "/assets/icons/customer-support.svg",
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#FAF3EA",
      }}
    >
      <Container className="mt-3">
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={6} className="px-3 mb-4 mt-5">
              <div className="d-flex align-items-center">
                <img
                  src={feature.iconUrl}
                  alt={feature.title}
                  style={{ width: "60px", marginRight: "15px" }}
                />
                <div>
                  <h5 className="fw-bold fs-5 mb-1">{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
