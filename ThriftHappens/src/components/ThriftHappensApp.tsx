import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";
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

export interface CheckoutItem {
  id: string;
  image: string
  name: string;
  price: number;
  itemQuantity: number;
  total: number;
}

export interface ItemsContainerProps extends ItemData {
    itemInfo: ItemInfo[];
    handleChangeQuantity: (id: number, delta: number) => void;
    handleAddToCart: (checkoutItem: CheckoutItem) => void;
}
export interface CheckoutContainerProps {
  checkoutData: CheckoutItem[];
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
    const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);

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
    function handleAddToCart(checkoutItem: CheckoutItem) {
    setCheckoutItems((prevCart) => {
      // Spread creates a new array and copies the submitted snapshot without
      // mutating either the previous cart or the object passed by the card.
      return [...prevCart, { ...checkoutItem }];
    });
  }

    return <div>
        <ItemsContainer 
        data={data} 
        itemInfo = {itemInfo}
        handleChangeQuantity={handleChangeQuantity}
        handleAddToCart={handleAddToCart}
        />
        <CheckoutContainer checkoutData={checkoutItems}/>
    
    </div>

}
