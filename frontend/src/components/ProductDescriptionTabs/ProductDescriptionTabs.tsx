import { Tabs, Tab, Container } from "react-bootstrap";

interface ProductDescriptionTabsProps {
  description: string;
  additionalInfo: string;
}

export function ProductDescriptionTabs({
  description,
  additionalInfo,
}: ProductDescriptionTabsProps) {
  return (
    <Container className="my-5">
      <hr />
      <Tabs
        defaultActiveKey="description"
        id="product-description-tabs"
        className="product-tabs fs-3 mb-5 mt-5 justify-content-center border-0"
        variant="none"
      >
        <Tab
          className="paragraph-description"
          eventKey="description"
          title="Description"
        >
          <p className="mx-5 px-5 text-muted text-justify">{description}</p>
        </Tab>
        <Tab
          className="paragraph-description"
          eventKey="additional"
          title="Additional Information"
        >
          <p className=" mx-5 px-5 text-muted text-justify">{additionalInfo}</p>
        </Tab>
      </Tabs>
    </Container>
  );
}
