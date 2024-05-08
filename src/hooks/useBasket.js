import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export function useBasket() {
    const [basket, setBasket] = useState(fakeBasket.SMALL);

    const addProductToBasket = (idProductToAdd) => {

    }

    const deleteProductFromBasket = (idProductToDelete) => {

    }

    // const editProductFromBasket = (EditedProduct) => {}
    
    return({basket, addProductToBasket, deleteProductFromBasket})
}