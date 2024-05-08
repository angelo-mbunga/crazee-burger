import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { EMPTY_PRODUCT } from "../enums/product";

export function useBasket() {
    const [basket, setBasket] = useState([]);
    const [menu] = useState(fakeBasket.LARGE);

    const addProductToBasket = (idProductToAdd) => {
        const basketCopy = deepClone(basket)
        const productClicked = menu.find((product) => product.id === idProductToAdd)
        basketCopy.unshift({id:productClicked.id, imageSource:productClicked.imageSource, title:productClicked.title, price:productClicked.price})
        setBasket(basketCopy)
    }

    const deleteProductFromBasket = (idProductToDelete) => {

    }

    // const editProductFromBasket = (EditedProduct) => {}
    
    return({basket, menu, addProductToBasket, deleteProductFromBasket})
}