import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { Col, Row } from "react-bootstrap";
export function Home() {
  const FeaturedIds = [3, 2, 6];
  const FeaturedProducts = storeItems.filter((product) => {
    return FeaturedIds.includes(product.id);
  });
  console.log(FeaturedProducts, "featured products data");

  return (
    <>
      <h1>Feature Products</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {FeaturedProducts.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
