import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  // Adicionamos a imagem de fundo como uma propriedade opcional
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
    <div style={{ ...style, padding: "4rem 0" }}>
      <Container className="text-center">
        <h1 className="fw-bold">{title}</h1>
        <Breadcrumb className="justify-content-center">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
}
