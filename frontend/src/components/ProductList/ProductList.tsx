import { Row, Col, Button } from "react-bootstrap";
import { ProductCard } from "../ProductCard/ProductCard";
import { type ProductSummary } from "../../types/Product";
import { Link } from "react-router-dom";

// Propriedades
interface ProductListProps {
  title?: string;
  products: ProductSummary[];
  showMoreButton?: boolean;
  viewMode?: "grid" | "list";
}

export function ProductList({
  title,
  products,
  showMoreButton = false,
  viewMode = "grid",
}: ProductListProps) {
  if (!products) {
    return null; // Mostrar uma mensagem de "Carregando...??"
  }

  const colProps =
    viewMode === "grid"
      ? { xs: 1, md: 2, lg: 3, xl: 4 }
      : { xs: 1, md: 1, lg: 1, xl: 1 };

  return (
    <section className="mb-5 d-flex justify-content-center flex-column">
      {/* Título */}
      {title && (
        <h2 className="section-title mb-5 fs-1 text-center fw-bold">{title}</h2>
      )}
      {/* Lista de produtos */}
      <Row {...colProps} className="g-4 justify-content-center">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      {/* ShowMoreButton */}
      {showMoreButton && (
        <div className="text-center mt-4">
          <Link to="/shop">
            <Button className="products-btn" variant="outline-warning">
              Show More
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
