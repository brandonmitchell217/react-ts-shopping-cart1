import { useParams } from "react-router-dom";
import teamData from "../data/team.json";

// type MemberProps = {
//   id: number;
//   name: string;
//   location: string;
//   description: string;
//   image: string;
// };

export function MemberModal({ data }: any) {
  return (
    <>
      <h1>{data.name}</h1>
      <h1>Hello</h1>
    </>
  );
}
