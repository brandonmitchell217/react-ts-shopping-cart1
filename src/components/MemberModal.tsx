import { useParams } from "react-router-dom";
import teamData from "../data/team.json";

export function MemberModal({ data }: any) {
  const { id }: any = useParams();
  let selected = data[id - 1];

  return (
    <>
      <img src={selected.image} />
      <h1>{selected.name}</h1>
      <span>{selected.location}</span>
      <p>{selected.description}</p>
    </>
  );
}
