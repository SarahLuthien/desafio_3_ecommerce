import { useState, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { type ProductDetail } from "../types/Product";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { ProductInfo } from "../components/ProductInfo/ProductInfo";
import { ProductDescriptionTabs } from "../components/ProductDescriptionTabs/ProductDescriptionTabs";
import { ProductList } from "../components/ProductList/ProductList";
import { type ProductSummary } from "../types/Product";

export function ProductDetailPage() {
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState<ProductSummary[]>([]);
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar detalhes do produto:", err);
          setError("Produto não encontrado ou erro na API.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  // busca dos produtos relacionados para o ProductList
  useEffect(() => {
    if (product?.category) {
      const apiUrl = `/api/products?category=${product.category}&limit=5`;

      axios
        .get(apiUrl)
        .then((response) => {
          const filteredProducts = response.data.data
            .filter((p: ProductSummary) => p.id !== product.id)
            .slice(0, 4);
          setRelatedProducts(filteredProducts);
        })
        .catch((err) => {
          console.error("Erro ao buscar produtos relacionados:", err);
        });
    }
  }, [product]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" />
        <p>A carregar produto...</p>
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error || "Produto não encontrado."}</Alert>
      </Container>
    );
  }

  // breadcrumb
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: product.name },
  ];

  return (
    <div>
      <PageHeader items={breadcrumbItems} />
      {/* Informação do produto */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <ImageGallery imageUrls={product.imageUrls} />
          </Col>
          <Col md={6}>
            <ProductInfo product={product} />
          </Col>
        </Row>
        {/* Descrição do produto */}
        <Row className="mt-5">
          <Col>
            <ProductDescriptionTabs
              description={product.description}
              additionalInfo={product.additional_information}
            />
          </Col>
        </Row>
      </Container>
      {/* lista de  produtos relacionados*/}
      <Container className=" my-5 ">
        <ProductList
          title="Related Products"
          products={relatedProducts}
          showMoreButton={true}
        />
      </Container>
    </div>
  );
}
