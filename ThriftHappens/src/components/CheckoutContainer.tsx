import type { CheckoutContainerProps } from "./ThriftHappensApp";
import CheckoutCard from "./CheckoutCard";

export default function CartContainer({ checkoutData }: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      {checkoutData.map((item) => (
        <CheckoutCard key={item.id} {...item} />
      ))}
      <h2>
        {checkoutData.length > 0
          ? `Cart Total: ${checkoutData.reduce((acc, item) => acc + item.total, 0).toFixed(2)}$`
          : "Cart is empty"}
      </h2>
    </div>
  );
}