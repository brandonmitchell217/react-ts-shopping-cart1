import { Container } from "react-bootstrap";
import teamData from "../data/team.json";
import { TeamMember } from "./TeamMember";

export function Team() {
  return (
    <Container className="px-3 team">
      <h1
        className="text-white px-3"
        style={{ borderBottom: "3px solid #fff", borderLeft: "6px solid #fff" }}
      >
        Team
      </h1>
      <div className="d-flex mt-5 px-3">
        {teamData.map((mem: any, key: number) => (
          <TeamMember {...mem} />
        ))}
      </div>
    </Container>
  );
}
