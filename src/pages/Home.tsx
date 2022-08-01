import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreItem } from "../components/StoreItem";

export function Home({ data }: any) {
  let itemsShown = [];
  for (let i = 1; i <= 4; i++) {
    let [things] = data.sort(() => Math.random() - 0.5).slice(0, 4);
    itemsShown.push(things);
  }
  return (
    <section style={{ height: "100vh" }}>
      <Container className="d-flex flex-column">
        <h1>Home</h1>
        <div className="p-5">
          <h1>Shop</h1>
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
        </div>
        <Link
          to="/store"
          className="text-white text-center bg-primary rounded py-2 px-4 mx-auto"
          style={{ textDecoration: "none", width: "200px" }}
        >
          Visit our Shop
        </Link>
      </Container>
    </section>
  );
}
