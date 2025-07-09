import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container, Pagination } from "react-bootstrap";
import { ProductList } from "../components/ProductList/ProductList";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { ShopControls } from "../components/ShopControls/Shop.Controls";
import { type ProductSummary } from "../types/Product";

export function ShopPage() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  // --- ESTADOS PARA TODOS OS FILTROS E ORDENAÇÃO ---
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    isNew: false,
    hasDiscount: false,
  });
  const [sortBy, setSortBy] = useState("default");

  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const productsPerPage = 16;

  // useEffect agora busca os dados com base em todos os filtros
  useEffect(() => {
    // Constrói a URL com todos os parâmetros dinamicamente
    const params = new URLSearchParams({
      page: currentPage.toString(),
      limit: productsPerPage.toString(),
      sortBy: sortBy,
    });

    if (filters.category) params.append("category", filters.category);
    if (filters.isNew) params.append("isNew", "true");
    if (filters.hasDiscount) params.append("hasDiscount", "true");

    const apiUrl = `http://localhost:3000/products?${params.toString()}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setError("Não foi possível carregar os produtos.");
      });
  }, [currentPage, filters, sortBy]); // Roda novamente se qualquer filtro ou ordenação mudar

  // Funções para atualizar o estado a partir do ShopControls
  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
    setCurrentPage(1); // Reseta para a primeira página ao mudar o filtro
  };

  const handleFilterChange = (
    filter: "isNew" | "hasDiscount",
    value: boolean
  ) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
    setCurrentPage(1);
  };

  const handleSortChange = (sortKey: string) => {
    setSortBy(sortKey);
  };

  return (
    <>
      <PageHeader
        title="Shop"
        backgroundImageUrl="/assets/images/banner-shop.png"
      />

      <Container fluid className="px-0">
        <ShopControls
          onCategoryChange={handleCategoryChange}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </Container>

      <Container className="my-5">
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <>
            <ProductList products={products} />
            <div className="d-flex justify-content-center mt-5">
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
            </div>
          </>
        )}
      </Container>
    </>
  );
}
