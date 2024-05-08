import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { EMPTY_PRODUCT } from "../enums/product";

export function useBasket() {
    //const [basket, setBasket] = useState(fakeBasket.SMALL);
    const [menu, setMenu] = useState(fakeBasket.LARGE);
    const [productToAddToBasket, setProductToAddToBasket] = useState(EMPTY_PRODUCT);

    const addProductToBasket = (idProductToAdd) => {
        const productClicked = menu.find((product) => product.id === idProductToAdd)
        setProductToAddToBasket(productClicked)
    }

    const deleteProductFromBasket = (idProductToDelete) => {

    }

    // const editProductFromBasket = (EditedProduct) => {}
    
    return({menu, addProductToBasket, deleteProductFromBasket,productToAddToBasket})
}