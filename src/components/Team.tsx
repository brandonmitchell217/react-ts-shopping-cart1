import { Container } from "react-bootstrap";
import teamData from "../data/team.json";
import { TeamMember } from "./TeamMember";

export function Team() {
  return (
    <Container>
      <h1 className="text-white">Team</h1>
      <div className="d-flex">
        {teamData.map((mem) => (
          <TeamMember {...mem} />
        ))}
      </div>
    </Container>
  );
}
