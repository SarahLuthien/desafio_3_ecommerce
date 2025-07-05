import { Row, Col, Button } from "react-bootstrap";
import { ProductCard } from "../ProductCard/ProductCard";
import { type ProductSummary } from "../../types/Product";
import { Link } from "react-router-dom";

// Propriedades
interface ProductListProps {
  title?: string; // Título opcional
  products: ProductSummary[];
  showMoreButton?: boolean; // Button Showmore opcional
}

export function ProductList({
  title,
  products,
  showMoreButton = false,
}: ProductListProps) {
  return (
    <section className="mb-5">
      {/* Título */}
      {title && (
        <h2 className="section-title mb-4 fs-1 text-center fw-bold">{title}</h2>
      )}

      <Row xs={1} md={2} lg={4} className="g-4">
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
            <Button variant="outline-warning">Show More</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
