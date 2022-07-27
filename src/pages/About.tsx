import { Col, Container, Row } from "react-bootstrap";
import { AboutLanding } from "../components/AboutLanding";
import { Team } from "../components/Team";

export function About() {
  return (
    <section
      className="pb-3"
      style={{ minHeight: "100vh", background: "#333333" }}
    >
      <Container>
        <AboutLanding />
        <Team />
      </Container>
    </section>
  );
}

// https://images.unsplash.com/photo-1496886077455-6e206da90837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80
