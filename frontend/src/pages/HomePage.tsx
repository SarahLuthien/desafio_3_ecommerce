import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { type ProductSummary } from "../types/Product";

export function HomePage() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setError("Não foi possível carregar os produtos.");
      });
  }, []);

  return (
    <>
      <h1 className="mb-4">Our Products</h1>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <Row xs={1} md={2} lg={4} className="g-5">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
