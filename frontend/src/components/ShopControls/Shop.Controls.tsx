import { Form } from "react-bootstrap";

interface ShopControlsProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  onSortChange: (sortKey: string) => void;
  onShowCountChange: (count: number) => void;
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function ShopControls({
  totalProducts,
  productsPerPage,
  currentPage,
  onSortChange,
  onShowCountChange,
  onViewModeChange,
}: ShopControlsProps) {
  // Lógica para calcular o texto "Showing..."
  const firstItem =
    totalProducts > 0 ? (currentPage - 1) * productsPerPage + 1 : 0;
  const lastItem = Math.min(currentPage * productsPerPage, totalProducts);
  const showingText = `Showing ${firstItem}–${lastItem} of ${totalProducts} results`;

  return (
    <div className="shop-controls-bar d-flex justify-content-between align-items-center flex-wrap gap-3">
      {/* Lado Esquerdo: Filtros e Contagem */}
      <div className="d-flex align-items-center">
        <div className="filter-button d-flex align-items-center me-4">
          <img src="/assets/icons/filter.svg" alt="Filter" />
          <span>Filter</span>
        </div>
        <div
          className="view-icon me-3"
          onClick={() => onViewModeChange("grid")}
        >
          <img src="/assets/icons/grid-big-round.svg" alt="Grid View" />
        </div>
        <div
          className="view-icon me-4"
          onClick={() => onViewModeChange("list")}
        >
          <img src="/assets/icons/view-list.svg" alt="List View" />
        </div>
        <div className="vr" style={{ height: "30px" }}></div>
        <span className="ms-4 text-muted">{showingText}</span>
      </div>

      {/* Lado Direito: Show e Sort By */}
      <div className="d-flex align-items-center">
        <Form.Label className="mb-0 me-3">Show</Form.Label>
        <Form.Control
          type="number"
          value={productsPerPage}
          className="shop-form-control shop-input-show"
          onChange={(e) => onShowCountChange(Number(e.target.value))}
        />

        <Form.Label className="mb-0 ms-4 me-3">Sort by</Form.Label>
        <Form.Select
          className="shop-form-control shop-select-sort"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </Form.Select>
      </div>
    </div>
  );
}
