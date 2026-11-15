import ItemCard from "./ItemCard";
import type { ItemsContainerProps } from "./ThriftHappensApp";

export default function ItemsContainer ({
    data,
    itemInfo,
    handleChangeQuantity,
}: ItemsContainerProps) {
    return (
        <div>
            {data.map((item) => {
                const info = itemInfo.find(
                    (information) => information.id === item.id,
                );
                if (!info) return null;
                return (
                    <ItemCard
                    key={item.id}
                    {...item}
                    itemInfo={info}
                    handleChangeQuantity={(delta: number) =>
                        handleChangeQuantity(item.id, delta)
                    }
                    />
                );
            })}
        </div>
    );
}