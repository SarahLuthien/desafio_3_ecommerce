// Interface para os cards (summary)
export interface ProductSummary {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  short_description: string;
  category: string;
  is_new: boolean;
  discount_percentage: number;
  rating: number;
}

// Interface para a página de detalhes do produto (details & sumary)
export interface ProductDetail extends ProductSummary {
  sku: string;
  description: string;
  additional_information: string;
  tags: string[];
  colors: string[];
  sizes: string[];
  review_count: number;
}
