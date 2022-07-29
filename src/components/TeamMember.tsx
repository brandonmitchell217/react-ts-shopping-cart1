import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type TeamMemberProps = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  props: void;
};

export function TeamMember({
  id,
  name,
  location,
  description,
  image,
}: TeamMemberProps) {
  return (
    <Link to={`/member/${id}`}>
      <Card className="mx-2 member-hover text-dark">
        <Card.Img
          src={image}
          variant="top"
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="py-2">
          <h3 style={{ borderBottom: "2px solid #333" }}>{name}</h3>
          <span>{location}</span>
          <p style={{ fontSize: "14px", lineHeight: "1.2" }}>{description}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}
