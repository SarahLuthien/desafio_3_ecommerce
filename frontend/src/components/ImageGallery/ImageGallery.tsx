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
    <Row>
      {/* Coluna das miniataras */}
      <Col xs={2}>
        <div className="thumbnail-container">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`thumbnail-item ${
                selectedImageIndex === index ? "active" : ""
              }`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image src={url} className="gallery-thumbnail-img" />
            </div>
          ))}
        </div>
      </Col>

      {/* Imagem principal */}
      <Col xs={10}>
        {mainImageUrl && <Image src={mainImageUrl} className="main-image" />}
      </Col>
    </Row>
  );
}
