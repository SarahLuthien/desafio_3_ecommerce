import { Image } from "react-bootstrap";

interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  const totalStars = 5;
  const fullStars = Math.floor(rating);

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        return (
          <Image
            key={index}
            src="/assets/icons/star-filled.svg"
            style={{
              width: "20px",
              filter:
                index < fullStars ? "none" : "grayscale(100%) opacity(30%)",
            }}
          />
        );
      })}
    </div>
  );
}
