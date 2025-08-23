import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { type Category } from "../../types/Category";

interface CategoryListProps {
  categories?: Category[];
}

export function CategoryList({ categories = [] }: CategoryListProps) {
  if (categories.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h2 className="section-title fw-bold">Browse The Range</h2>
        <p className="text-muted mb-4">
          Nenhuma categoria encontrada no momento.
        </p>
      </Container>
    );
  }

  return (
    <Container className="my-5 text-center">
      <h2 className="section-title fw-bold">Browse The Range</h2>
      <p className="text-muted mb-4">
        Explore as nossas principais categorias de produtos.
      </p>
      <Row xs={1} md={3} className="g-4">
        {categories.map((category) => (
          <Col key={category.id}>
            <Link
              to={`/shop?category=${category.name}`}
              className="text-decoration-none text-dark"
            >
              <CategoryCard category={category} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
