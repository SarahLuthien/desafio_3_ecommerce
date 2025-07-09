import { Form, Dropdown } from "react-bootstrap";

interface ShopControlsProps {
  onCategoryChange: (category: string) => void;
  onFilterChange: (filter: "isNew" | "hasDiscount", value: boolean) => void;
  onSortChange: (sortKey: string) => void;
}

export function ShopControls({
  onCategoryChange,
  onFilterChange,
  onSortChange,
}: ShopControlsProps) {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 mb-4"
      style={{ backgroundColor: "#F9F1E7" }}
    >
      <div className="d-flex align-items-center">
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-filter">
            Filters
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
        <span className="ms-3 text-muted">Showing 1–16 of 32 results</span>
      </div>

      <div className="d-flex align-items-center">
        <span className="me-2">Sort by</span>
        <Dropdown onSelect={(eventKey) => onSortChange(eventKey || "default")}>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-sort">
            Default
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="price_asc">
              Preço: Menor para Maior
            </Dropdown.Item>
            <Dropdown.Item eventKey="price_desc">
              Preço: Maior para Menor
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
