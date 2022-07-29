import { useParams } from "react-router-dom";
import teamData from "../data/team.json";

export function MemberModal({ data }: any) {
  return (
    <>
      {/* <h1>{data.location}</h1>
      <h1>Hello</h1> */}
      {data.map((member: any) => (
        <>
          <h1>{member.name}</h1>
          <h4>{member.location}</h4>
        </>
      ))}
    </>
  );
}
