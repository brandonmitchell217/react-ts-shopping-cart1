import { Col, Row, Container } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Home({ data }: any) {
  let itemsShown = [];
  for (let i = 1; i <= 4; i++) {
    let [things] = data.sort(() => Math.random() - 0.5).slice(0, 4);
    itemsShown.push(things);
  }
  return (
    <section className="pb-3">
      <Container>
        <h1>Home</h1>
        <Row md={4} xs={2} lg={4} className="g-3 px-5">
          {itemsShown.map((item: any) => (
            <Col>
              <StoreItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                type={item.type}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
