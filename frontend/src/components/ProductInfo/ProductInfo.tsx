import { useState } from "react";
import { Button } from "react-bootstrap";
import { type ProductDetail } from "../../types/Product";
import { Rating } from "../Rating/Rating";

interface ProductInfoProps {
  product: ProductDetail;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="ps-5 ms-5">
      {/* Título */}
      <h1 className="product-title">{product.name}</h1>

      {/* Preço */}
      <p className="product-price fs-4">Rs. {product.price.toFixed(2)}</p>

      {/* Avaliação (Rating) */}
      <div className="d-flex align-items-center mb-3">
        <Rating rating={product.rating} />
        <span className="vr mx-3"></span>
        <span className="text-muted">
          {product.review_count} Customer Review
        </span>
      </div>

      {/* Descrição Curta */}
      <p className=" mb-4">{product.short_description}</p>

      {/* Seletor de Tamanho */}
      <div className=" mb-4">
        <p className="text-muted mb-1">Size</p>
        {product.sizes.map((size) => (
          <Button
            key={size}
            variant="outline-secondary"
            className="size-btn me-2"
          >
            {size}
          </Button>
        ))}
      </div>

      {/* Seletor de Cor */}
      <div className="mb-5">
        <p className="text-muted mb-1">Color</p>
        {product.colors.map((color) => (
          <Button
            key={color}
            className="color-btn me-2"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Ações: Quantidade e Botões */}
      <div className="d-flex flex-column flex-xl-row align-items-md-center mb-5 gap-3">
        <div className="quantity-selector d-flex align-items-center justify-content-center w-100 w-md-auto mb-3 mb-md-0 me-md-3">
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </Button>
          <span className="mx-3 fs-5">{quantity}</span>
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </Button>
        </div>

        <Button
          size="sm"
          variant="outline-dark"
          className="btn-cart mb-3 mb-md-0 me-md-3 w-100 w-md-auto text-nowrap"
        >
          Add To Cart
        </Button>

        <Button
          size="sm"
          variant="outline-dark"
          className="btn-compare w-100 w-md-auto text-nowrap"
        >
          + Compare
        </Button>
      </div>
      <hr />

      {/* Informações */}
      <div className="product-meta mt-5">
        <p>SKU : {product.sku}</p>
        <p>Category : {product.category}</p>
        <p>Tags : {product.tags.join(", ")}</p>
        <p>
          Share :
          <img
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            className="ms-2"
          />
          <img
            src="/assets/icons/linkedin.svg"
            alt="LinkedIn"
            className="ms-4"
          />
          <img src="/assets/icons/twitter.svg" alt="Twitter" className="ms-4" />
        </p>
      </div>
    </div>
  );
}
