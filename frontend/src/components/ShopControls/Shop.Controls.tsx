import { Form, Dropdown } from "react-bootstrap";
import React from "react";

interface ShopControlsProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  onCategoryChange: (category: string) => void;
  onFilterChange: (filter: "isNew" | "hasDiscount", value: boolean) => void;
  onSortChange: (sortKey: string) => void;
  onShowCountChange: (count: number) => void;
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function ShopControls({
  totalProducts,
  productsPerPage,
  currentPage,
  onCategoryChange,
  onFilterChange,
  onSortChange,
  onShowCountChange,
  onViewModeChange,
}: ShopControlsProps) {
  // Lógica para calcular o Showing
  const firstItem =
    totalProducts > 0 ? (currentPage - 1) * productsPerPage + 1 : 0;
  const lastItem = Math.min(currentPage * productsPerPage, totalProducts);
  const showingText = `Showing ${firstItem}–${lastItem} of ${totalProducts} results`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["ArrowLeft", "ArrowRight", "Tab"].includes(e.key)) {
      return;
    }

    e.preventDefault();
  };

  return (
    <div className="shop-controls-bar d-flex justify-content-between align-items-center flex-wrap gap-3">
      {/* Lado Esquerdo: Filtros e Contagem */}
      <div className="d-flex align-items-center">
        <div className="filter-button d-flex align-items-center me-4">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-filter"
              className="filter-button text-dark text-decoration-none p-0 me-4"
            >
              <img src="/assets/icons/filter.svg" alt="Filter" />
              <span>Filter</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Categorias</Dropdown.Header>
              <Dropdown.Item onClick={() => onCategoryChange("Dining")}>
                Dining
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onCategoryChange("Living")}>
                Living
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onCategoryChange("Bedroom")}>
                Bedroom
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onCategoryChange("")}>
                Todas
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Outros Filtros</Dropdown.Header>
              <div className="px-3 py-2">
                <Form.Check
                  type="checkbox"
                  id="new-filter"
                  label="New"
                  onChange={(e) => onFilterChange("isNew", e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  id="discount-filter"
                  label="Discount"
                  onChange={(e) =>
                    onFilterChange("hasDiscount", e.target.checked)
                  }
                />
              </div>
            </Dropdown.Menu>
          </Dropdown>
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
        <Form.Label className="mb-0 me-3 ">Show</Form.Label>
        <Form.Control
          style={{ width: "70px" }}
          type="number"
          value={productsPerPage}
          className="shop-form-control text-center text-muted shop-input-show "
          onChange={(e) => onShowCountChange(Number(e.target.value))}
          onKeyDown={handleKeyDown}
        />

        <Form.Label className="mb-0 ms-4 me-3" style={{ width: "60px" }}>
          Sort by
        </Form.Label>
        <Form.Select
          style={{ width: "200px" }}
          className="shop-form-control text-muted shop-select-sort"
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
