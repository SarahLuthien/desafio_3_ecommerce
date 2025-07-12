import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Pagination, Alert } from "react-bootstrap";
import { ProductList } from "../components/ProductList/ProductList";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { ShopControls } from "../components/ShopControls/Shop.Controls";
import { type ProductSummary } from "../types/Product";
import { useSearchParams } from "react-router-dom";
import { FeaturesSection } from "../components/FeaturesSection/FeaturesSection";

export function ShopPage() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();

  // Estados para todos os filtros
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    isNew: false,
    hasDiscount: false,
  });
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Estados para paginação
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
    if (filters.category) params.append("category", filters.category);
    if (filters.isNew) params.append("isNew", "true");
    if (filters.hasDiscount) params.append("hasDiscount", "true");

    const apiUrl = `/api/products?${params.toString()}`;

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
  }, [currentPage, filters, sortBy, productsPerPage]);

  // Função para atualizar estado do Shopcontrols
  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
    setCurrentPage(1);
  };

  const handleFilterChange = (
    filter: "isNew" | "hasDiscount",
    value: boolean
  ) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
    setCurrentPage(1);
  };

  // breadcrumb
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
  ];

  return (
    <>
      <PageHeader
        items={breadcrumbItems}
        title="Shop"
        backgroundImageUrl="./assets/images/banner-shop.png"
      />
      {/* Sessão de filtros */}
      <Container fluid className="px-0">
        <ShopControls
          totalProducts={totalProducts}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          onCategoryChange={handleCategoryChange}
          onFilterChange={handleFilterChange}
          onSortChange={setSortBy}
          onShowCountChange={setProductsPerPage}
          onViewModeChange={setViewMode}
        />
      </Container>

      <Container className="my-5">
        {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <>
            {/* Sessão da lista de produtos */}
            <ProductList products={products} viewMode={viewMode} />
            <div className="container-pagination">
              {totalPages > 1 && (
                <Pagination className="custom-pagination">
                  {/* Números das Páginas  */}
                  {[...Array(totalPages).keys()].map((number) => (
                    <Pagination.Item
                      key={number + 1}
                      active={number + 1 === currentPage}
                      onClick={() => setCurrentPage(number + 1)}
                    >
                      {number + 1}
                    </Pagination.Item>
                  ))}

                  {/* Botão "Próximo" */}
                  <Pagination.Next
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Pagination.Next>
                </Pagination>
              )}
            </div>
          </>
        )}
      </Container>
      {/* Sessão de informações */}
      <FeaturesSection />
    </>
  );
}
