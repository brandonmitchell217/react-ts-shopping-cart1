import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
};

export function StoreItem({ id, name, image, price, type }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();

  return (
    <Card className="text-dark my-3 member-hover" style={{ maxWidth: "300px" }}>
      <Card.Img src={image} variant="top" />
      <Card.Body className="px-3">
        <h3 className="text-center">{name}</h3>
        <span>{price}</span>
        <span className="d-block text-muted text-lowercase">{type}</span>
        <Button
          className="d-block mt-3 mx-auto"
          onClick={() => increaseCartQuantity(id)}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
