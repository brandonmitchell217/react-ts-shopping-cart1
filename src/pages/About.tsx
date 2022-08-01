import { Container } from "react-bootstrap";
import { AboutLanding } from "../components/AboutLanding";
import { Team } from "../components/Team";

export function About() {
  return (
    <section className="pb-3">
      <Container>
        <AboutLanding />
        <Team />
      </Container>
    </section>
  );
}
