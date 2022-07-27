import { Col, Container, Row } from "react-bootstrap";
import { AboutLanding } from "../components/AboutLanding";
import { Team } from "../components/Team";

export function About() {
  return (
    <section
      className="pb-3"
      style={{ minHeight: "100vh", background: "#333333", color: "#fff" }}
    >
      <Container>
        <AboutLanding />
        <Team />
      </Container>
    </section>
  );
}
