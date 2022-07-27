import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export function StoreItem({ id, name, image, price }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  //   const quantity = getItemQuantity(id);

  return (
    <Card style={{ maxWidth: "300px" }}>
      <Card.Img src={image} variant="top" />
      <Card.Body className="px-3">
        <h3 className="text-center">{name}</h3>
        <span>{price}</span>
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
