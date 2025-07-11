import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  items: BreadcrumbItem[];
  title?: string;
  backgroundImageUrl?: string;
}

export function PageHeader({
  items,
  title,
  backgroundImageUrl,
}: PageHeaderProps) {
  const style = backgroundImageUrl
    ? {
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "6rem 0",
      }
    : {
        backgroundColor: "#F9F1E7",
        padding: "2rem 0",
      };

  return (
    <div className="d-flex align-items-center " style={{ ...style }}>
      <Container className="text-center">
        {title && <h1 className="fw-medium text-center">{title}</h1>}

        <Breadcrumb className="d-flex justify-content-center mb-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <Breadcrumb.Item
                key={index}
                linkAs={isLast ? undefined : Link}
                linkProps={{ to: item.path || "" }}
                active={isLast}
                className={!isLast ? "breadcrumb-link" : ""}
              >
                {item.label}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </Container>
    </div>
  );
}
