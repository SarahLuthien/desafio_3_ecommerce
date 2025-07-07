import { useState, useEffect } from "react";
import axios from "axios";
import { ProductList } from "../components/ProductList/ProductList";
import { type ProductSummary } from "../types/Product";
import { CategoryList } from "../components/CategoryList/CategoryList";

export function HomePage() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products?limit=8")
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
      {/* Aqui virá o Header */}

      {/* Aqui virá o Banner Principal */}

      {/* Sessão Categoria */}
      <CategoryList />

      {/* Sessão produtos */}
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <ProductList
          title="Our Products"
          products={products}
          showMoreButton={true}
        />
      )}
    </>
  );
}
