import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { type Category } from "../../types/Category";

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

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
    <section className="text-center py-5 px-5">
      <h2 className="section-title fw-bold pb-4">Browse The Range</h2>
      <Row className="mt-5">
        {categories.map((category) => (
          <Col md={4} key={category.id} className="mb-4">
            <Link
              to={`/shop?category=${category.name}`}
              className="text-decoration-none text-dark"
            >
              <CategoryCard category={category} />
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
}
