import { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

interface ImageGalleryProps {
  imageUrls: string[];
}

export function ImageGallery({ imageUrls = [] }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    imageUrls[0] || null
  );

  useEffect(() => {
    if (imageUrls.length > 0) {
      setSelectedImage(imageUrls[0]);
    }
  }, [imageUrls]);

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <Row>
      {/* Coluna das miniataras */}
      <Col xs={2}>
        <div className="thumbnail-container">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`thumbnail-item ${
                selectedImage === url ? "active" : ""
              }`}
              onClick={() => setSelectedImage(url)}
            >
              <Image src={url} className="gallery-thumbnail-img" />
            </div>
          ))}
        </div>
      </Col>

      {/* Imagem principal */}
      <Col xs={10}>
        {selectedImage && <Image src={selectedImage} className="main-image" />}
      </Col>
    </Row>
  );
}
