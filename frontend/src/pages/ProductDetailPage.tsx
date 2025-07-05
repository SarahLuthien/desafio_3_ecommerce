import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { type ProductDetail } from "../types/Product";

export function ProductDetailPage() {
  // Hook useParams do ID
  const { id } = useParams();

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // ID passado para montar a URL da API correspondente
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erro ao buscar detalhes do produto:", err);
          setError("Produto não encontrado ou erro na API.");
          setLoading(false);
        });
    }
  }, [id]); // Efeito roda novamente se o ID  mudar

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>SKU: {product.sku}</p>
      <p>Preço: R$ {product.price}</p>
      <hr />
      <h2>Descrição Curta</h2>
      <p>{product.short_description}</p>
      <hr />
      <h2>Descrição Longa</h2>
      <p>{product.description}</p>
      <hr />
      <h2>Informação Adicional</h2>
      <p>{product.additional_information}</p>
    </div>
  );
}
