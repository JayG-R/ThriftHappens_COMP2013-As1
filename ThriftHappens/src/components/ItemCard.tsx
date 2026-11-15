import type { ClothingProduct } from "../data/data";


export default function ItemCard({
    image,
    name,
    fit,
    category,
    color,
    description,
    size,
    price,
    quantity,
}: ClothingProduct) {
    return (
        <div className="ItemCard">
            <h2>{name}</h2>
            <img src={image} alt="" height="100px" />
            <br />
            <p><b>{fit} • {category} • {color}</b></p>
            <p><b>{size}</b></p>
            <p>{description}</p>
            <h4>${price.toFixed(2)}</h4>
            <button>{" - "}</button>
            <span> {quantity} </span>
            <button>{" + "}</button>
            
        </div>
    )
}