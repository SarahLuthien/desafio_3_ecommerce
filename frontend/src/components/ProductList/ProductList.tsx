import { Row, Col, Button } from "react-bootstrap";
import { ProductCard } from "../ProductCard/ProductCard";
import { type ProductSummary } from "../../types/Product";
import { Link } from "react-router-dom";

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
  if (viewMode === "list") {
    return (
      <section className="mb-5">
        {title && <h2 className="section-title">{title}</h2>}
        <div className="d-flex flex-column align-items-center gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-5">
      {title && <h2 className="section-title text-center fw-bold">{title}</h2>}
      <Row
        xs={1}
        md={2}
        lg={3}
        xl={4}
        className="g-3 justify-content-center mt-3"
      >
        {products.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center mt-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      {showMoreButton && (
        <div className="text-center mt-5">
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
