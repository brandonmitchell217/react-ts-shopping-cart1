import { Col, Row } from "react-bootstrap";
import { Team } from "../components/Team";

export function About() {
  return (
    <>
      <h1>About</h1>
      {/* <Row md={2} xs={1} lg={3} className="g-3">
        <Col> */}
      <Team />
      {/* </Col>
      </Row> */}
    </>
  );
}
