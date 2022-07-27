import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <section
      className="pb-3"
      style={{ minHeight: "100vh", background: "#333333" }}
    >
      <Container>
        <h1>Store</h1>
        <Row md={4} xs={2} lg={4} className="g-0">
          {storeItems.map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
