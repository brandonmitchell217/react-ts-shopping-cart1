import { useParams } from "react-router-dom";

export function MemberModal({ data }: any) {
  const { id }: any = useParams();
  let selected = data[id - 1];

  return (
    <section>
      <div className="member-modal">
        <div className="image">
          <img src={selected.image} alt="Skateboarding dude" />
        </div>
        <div className="body">
          <h1>{selected.name}</h1>
          <span>{selected.location}</span>
          <p>{selected.description}</p>
        </div>
      </div>
    </section>
  );
}
