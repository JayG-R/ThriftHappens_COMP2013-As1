import type { ClothingProduct } from "../data/data";
import type { ItemInfo } from "./ThriftHappensApp";
import type { CheckoutItem } from "./ThriftHappensApp";

export interface ItemCardProps extends ClothingProduct {
    itemInfo: ItemInfo
    handleChangeQuantity: (delta: number) => void;
    handleAddToCart: (checkoutItem: CheckoutItem) => void;
}

export default function ItemCard({
    image,
    name,
    fit,
    category,
    color,
    description,
    size,
    price,
    itemInfo,
    handleChangeQuantity,
    handleAddToCart,
}: ItemCardProps) {
    return (
        <div className="ItemCard">
            <h2>{name}</h2>
            <img src={image} alt="" height="100px" />
            <h2>{itemInfo.quantity == 0 ? "Out of Stock" : ""}</h2>

            <p><b>{fit} • {category} • {color}</b></p>
            <p><b>{size}</b></p>
            <p>{description}</p>
            <p><b>${price.toFixed(2)}</b></p>
            <button onClick={() => handleChangeQuantity(-1)}>{" - "}
            </button>
            <span>{itemInfo.itemQuantity}</span>
            <button onClick={() => handleChangeQuantity(1)}>{" + "}</button>  
            <br />
            <button
                    onClick={() =>
                    handleAddToCart({
                    id: crypto.randomUUID(),
                    image: image,
                    name: name,
                    price: price,
                    itemQuantity: itemInfo.itemQuantity,
                    total: itemInfo.itemQuantity * price,
                })
                }
                >
                Add to Cart
            </button>   
        </div>
    )
}