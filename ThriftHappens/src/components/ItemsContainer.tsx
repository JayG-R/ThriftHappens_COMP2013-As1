import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCard";


interface ItemsContainerProps {
    data: ClothingProduct[];
}

export default function ItemContainer ({data}: ItemsContainerProps) {
    return (
        <div>
            {data.map((item) => (
                <ItemCard key={item.id}{...item}/>
            ))}
        </div>
    );
}