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
  const quantity = getItemQuantity(id);

  return (
    <Card>
      <Card.Img src={image} variant="top" />
      <h3>{name}</h3>
      <span>{price}</span>
      <Button className="mt-3" onClick={() => increaseCartQuantity(id)}>
        Add to cart
      </Button>
    </Card>
  );
}
