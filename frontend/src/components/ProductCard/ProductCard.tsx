import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { type ProductSummary } from "../../types/Product";
import { Link } from "react-router-dom";
import "../../App.css";

{
  /* Interface criada via types Product.ts */
}
interface ProductCardProps {
  product: ProductSummary;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discount_percentage > 0;

  let finalPrice = product.price;
  if (hasDiscount) {
    finalPrice = product.price * (1 - product.discount_percentage);
  }

  return (
    <Card className="product-card border-0 shadow-sm">
      {/* Container imagem e tags */}
      <div className="product-image-container">
        <Card.Img
          variant="top"
          src={product.imageUrls[0]}
          className="product-card-img"
          style={{ height: "301px", objectFit: "cover" }}
        />

        {/* Overlay */}
        <div className="product-overlay">
          <Link to={`/products/${product.id}`}>
            <Button className="products-btn" variant="light" size="lg">
              See Details
            </Button>
          </Link>
          <div className="mt-3 d-flex justify-content-center align-items-center fw-bold">
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <img src="/assets/icons/share.svg" alt="Share" className="me-1" />
              <span>Share</span>
            </div>
            <div
              className="d-flex align-items-center mx-4"
              style={{ cursor: "pointer" }}
            >
              <img
                src="/assets/icons/compare.svg"
                alt="Compare"
                className="me-1"
              />
              <span>Compare</span>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <img src="/assets/icons/like.svg" alt="Like" className="me-1" />
              <span>Like</span>
            </div>
          </div>
        </div>

        {/* Tags de desconto/novo  */}
        {hasDiscount && (
          <Badge className="position-absolute top-0 end-0 m-2 discount-badge">
            -{product.discount_percentage * 100}%
          </Badge>
        )}
        {product.is_new && !hasDiscount && (
          <Badge className="position-absolute top-0 end-0 m-2 new-badge">
            New
          </Badge>
        )}
      </div>

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted">
          {product.short_description}
        </Card.Text>
        <div className="d-flex align-items-center">
          <span className="fw-bold fs-5 me-3">R$ {finalPrice.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-muted text-decoration-line-through">
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
