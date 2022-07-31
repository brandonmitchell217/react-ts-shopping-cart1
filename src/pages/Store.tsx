import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  const [category, setCategory] = useState("");

  return (
    <section className="py-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center my-3">
          <h1>Store</h1>
          <div className="d-flex justify-content-around w-25">
            <Button variant="outline-light" onClick={() => setCategory("")}>
              All
            </Button>
            <Button variant="outline-light" onClick={() => setCategory("deck")}>
              Decks
            </Button>
            <Button
              variant="outline-light"
              onClick={() => setCategory("shoes")}
            >
              Shoes
            </Button>
          </div>
        </div>
        <Row md={4} xs={2} lg={4} className="g-3">
          {category === ""
            ? storeItems.map((item) => (
                <Col>
                  <Link to={`/store/products/${item.id}`}>
                    <StoreItem {...item} />
                  </Link>
                </Col>
              ))
            : storeItems
                .filter((item) => item.type.toLowerCase() === category)
                .map((item) => (
                  <Col>
                    <Link to={`/store/products/${item.id}`}>
                      <StoreItem {...item} />
                    </Link>
                  </Col>
                ))}
        </Row>
      </Container>
    </section>
  );
}
