import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  backgroundImageUrl?: string;
}

export function PageHeader({ title, backgroundImageUrl }: PageHeaderProps) {
  const style = backgroundImageUrl
    ? {
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundColor: "#F9F1E7",
      };

  return (
    <div
      className="d-flex align-items-center "
      style={{ ...style, height: "316px" }}
    >
      <Container className="text-center">
        <h1 className="fw-medium">{title}</h1>
        <Breadcrumb className="d-flex justify-content-center">
          <Breadcrumb.Item
            className="breadcrumb-link"
            linkAs={Link}
            linkProps={{ to: "/" }}
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
}
