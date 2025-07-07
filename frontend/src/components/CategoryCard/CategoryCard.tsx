import { type Category } from "../../types/Category";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="text-center">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="img-fluid category-card"
        style={{ height: "480px", objectFit: "cover", borderRadius: "10px" }}
      />
      <h3 className="mt-4 fs-4">{category.name}</h3>
    </div>
  );
}
