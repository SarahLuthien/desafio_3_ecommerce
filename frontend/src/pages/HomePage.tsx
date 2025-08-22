import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { ProductList } from "../components/ProductList/ProductList";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { FeaturesSection } from "../components/FeaturesSection/FeaturesSection";
import { Banner } from "../components/Banner/Banner";
import { type ProductSummary } from "../types/Product";
import { type Category } from "../types/Category";

export function HomePage() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/products?limit=8")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setError("Não foi possível carregar os produtos.");
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar categorias:", error);
      });
  }, []);

  return (
    <>
      <Banner />

      <CategoryList categories={categories} />

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

      <FeaturesSection />
    </>
  );
}
