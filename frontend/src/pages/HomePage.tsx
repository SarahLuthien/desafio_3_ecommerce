import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { ProductList } from "../components/ProductList/ProductList";
import { type ProductSummary } from "../types/Product";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { FeaturesSection } from "../components/FeaturesSection/FeaturesSection";
import { Banner } from "../components/Banner/Banner";

export function HomePage() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products?limit=8")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setError("Não foi possível carregar os produtos.");
      });
  }, []);

  return (
    <>
      <Banner />

      {/* Sessão Categoria */}
      <Container className="my-5">
        <CategoryList />
      </Container>

      {/* Sessão produtos */}
      <Container className="my-5">
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <ProductList
            title="Our Products"
            products={products}
            showMoreButton={true}
          />
        )}
      </Container>
      {/* Sessão de informações */}
      <FeaturesSection />
    </>
  );
}
