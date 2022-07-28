import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  const [category, setCategory] = useState("");

  // const filterType = (type: string) => {
  //   if (type === "deck" && category === "deck") {
  //     return storeItems
  //       .filter((item) => item.type === "deck")
  //       .map((item) => (
  //         <Col>
  //           <StoreItem {...item} />
  //         </Col>
  //       ));
  //   } else if (type === "shoes" && category === "shoes") {
  //     return storeItems
  //       .filter((item) => item.type === "shoes")
  //       .map((item) => (
  //         <Col>
  //           <StoreItem {...item} />
  //         </Col>
  //       ));
  //   }
  // };

  return (
    <section className="py-3" style={{ minHeight: "100vh", color: "#fff" }}>
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
