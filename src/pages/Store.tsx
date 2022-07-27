import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <section className="pb-3" style={{ minHeight: "100vh", color: "#fff" }}>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Store</h1>
          <div className="d-flex">
            <h5 className="mx-3">Decks</h5>
            <h5 className="mx-3">Shoes</h5>
          </div>
        </div>
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
