import { Col, Container, Row } from "react-bootstrap";
import { Team } from "../components/Team";

export function About() {
  return (
    <section style={{ minHeight: "100vh", background: "#333333" }}>
      <Container>
        <h1>About</h1>
        <Team />
      </Container>
    </section>
  );
}
