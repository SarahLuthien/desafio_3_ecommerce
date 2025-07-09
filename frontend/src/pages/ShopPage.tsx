import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Pagination, Alert } from "react-bootstrap";
import { ProductList } from "../components/ProductList/ProductList";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { ShopControls } from "../components/ShopControls/Shop.Controls";
import { type ProductSummary } from "../types/Product";
import { useSearchParams } from "react-router-dom";

export function ShopPage() {
  // O estado 'products' começa como um array vazio, e não undefined
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  // ... (toda a outra lógica de estado para filtros, paginação, etc.)
  const [searchParams] = useSearchParams();
  const [categoryFilter] = useState(searchParams.get("category") || "");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    const params = new URLSearchParams({
      page: currentPage.toString(),
      limit: productsPerPage.toString(),
      sortBy: sortBy,
    });
    if (categoryFilter) params.append("category", categoryFilter);

    const apiUrl = `http://localhost:3000/products?${params.toString()}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.data);
        setTotalProducts(response.data.total);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setError("Não foi possível carregar os produtos.");
      });
  }, [currentPage, categoryFilter, sortBy, productsPerPage]);

  return (
    <>
      <PageHeader
        title="Shop"
        backgroundImageUrl="/assets/images/banner-shop.png"
      />

      <Container fluid className="px-0">
        <ShopControls
          totalProducts={totalProducts}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          onSortChange={setSortBy}
          onShowCountChange={setProductsPerPage}
          onViewModeChange={() => {}}
        />
      </Container>

      <Container className="my-5">
        {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <>
            <ProductList products={products} />
            <div className="d-flex justify-content-center mt-5">
              {totalPages > 1 && (
                <Pagination>
                  {/* 1. Botão "Anterior" */}
                  <Pagination.Prev
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  />

                  {/* 2. Os Números das Páginas (1, 2, 3...) */}
                  {[...Array(totalPages).keys()].map((number) => (
                    <Pagination.Item
                      key={number + 1}
                      active={number + 1 === currentPage}
                      onClick={() => setCurrentPage(number + 1)}
                    >
                      {number + 1}
                    </Pagination.Item>
                  ))}

                  {/* 3. Botão "Próximo" */}
                  <Pagination.Next
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
}
