import { Card } from "react-bootstrap";

type TeamMemberProps = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
};

export function TeamMember({
  id,
  name,
  location,
  description,
  image,
}: TeamMemberProps) {
  return (
    <Card>
      <Card.Img
        src={image}
        variant="top"
        height="350px"
        style={{ objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <span>{location}</span>
      <p>{description}</p>
    </Card>
  );
}
