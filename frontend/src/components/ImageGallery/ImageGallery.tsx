import { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

interface ImageGalleryProps {
  imageUrls: string[];
}

export function ImageGallery({ imageUrls = [] }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [imageUrls]);

  if (imageUrls.length === 0) {
    return null;
  }

  const mainImageUrl = imageUrls[selectedImageIndex];

  return (
    <Row className="g-3 mb-4 mb-xl-0">
      {/* Imagem Principal */}
      <Col xs={12} xl={10} className="order-xl-2">
        {mainImageUrl && (
          <Image
            src={mainImageUrl}
            fluid
            className="w-100"
            style={{
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        )}
      </Col>

      {/* Coluna das Miniaturas */}
      <Col xs={12} xl={2} className="order-xl-1">
        <div
          className="d-flex flex-row flex-xl-column overflow-auto"
          style={{ maxHeight: "550px" }}
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="me-2 me-xl-0 mb-xl-2"
              onClick={() => setSelectedImageIndex(index)}
              style={{ cursor: "pointer", flexShrink: 0 }}
            >
              <Image
                src={url}
                fluid
                className="w-100 rounded"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  border:
                    selectedImageIndex === index
                      ? "2px solid #FFD700"
                      : "1px solid #dee2e6",
                }}
              />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default ImageGallery;
