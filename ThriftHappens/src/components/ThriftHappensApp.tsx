import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import { useState } from "react";

// interfaces -------------------------------------------------------
interface ItemData {
    data: ClothingProduct[];
}

// responsible for itemInfo state
export interface ItemInfo {
   id: number;
   quantity: number;
   itemQuantity: number;
}
export interface ItemsContainerProps extends ItemData {
    itemInfo: ItemInfo[];
    handleChangeQuantity: (id: number, delta: number) => void;
}


export default function ThriftHappensApp({data}: ItemData) {
    //states -------------------------------------------------------
    const [itemInfo, setItemInfo] = useState<ItemInfo[]>(
        data.map((item: ClothingProduct) => ({
            id: item.id,
            quantity: item.quantity,
            itemQuantity: item.itemQuantity,
        })),
    );

    //Handlers --------------------------------------------------------
    
    //handles quantity ticker
    function handleChangeQuantity(id: number, delta: number) {
        setItemInfo((prevData) =>
            prevData.map((info) =>
            info.id === id
            ? { ...info, itemQuantity: Math.max(0, info.itemQuantity + delta) }
            : info,
            ),
        );
    }

    return <div>
        <ItemsContainer 
        data={data} 
        itemInfo = {itemInfo}
        handleChangeQuantity={handleChangeQuantity}
        />
    </div>

}
