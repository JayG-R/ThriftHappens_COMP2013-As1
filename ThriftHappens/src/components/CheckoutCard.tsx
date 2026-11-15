
import type { CheckoutItem } from "./ThriftHappensApp";


export default function CheckoutCard ({
    image,
    name,
    price,
    itemQuantity,
    total,
}: CheckoutItem) {
    return (
    <div className="CartCard">
      <h2>{name}</h2>
      <img src={image} alt="" height="100px" />
      <p>quantity: {itemQuantity}</p>
      <p>price: {price.toFixed(2)}$</p>
      <p>total: {total.toFixed(2)}$</p>
    </div>
  );

}