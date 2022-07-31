import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useParams } from "react-router-dom";

export function ItemModal({ data }: any) {
  const { increaseCartQuantity } = useShoppingCart();
  const { id }: any = useParams();
  let selected = data[id - 1];
  return (
    <section>
      <div className="item-modal">
        <div className="image">
          <img src={selected.image} alt="Product Image" />
        </div>
        <div className="body">
          <h1>{selected.name}</h1>
          <span>${selected.price}</span>
          <Button
            className="d-block mt-3 mx-auto"
            onClick={() => increaseCartQuantity(selected.id)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
}
