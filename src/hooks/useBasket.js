import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export function useBasket() {
    const [basket, setBasket] = useState([]);
    const [menu] = useState(fakeBasket.LARGE);

    const addProductToBasket = (idProductToAdd) => {
        const basketCopy = deepClone(basket)
        const productClicked = menu.find((product) => product.id === idProductToAdd) 
        const isProductInBasket = basketCopy.find((product) => {
            if (product.title === productClicked.title) {
                return true 
            }
        })

        if (basketCopy.length === 0) {
            basketCopy.unshift({id:productClicked.id, imageSource:productClicked.imageSource, title:productClicked.title, price:productClicked.price, count:1})
            setBasket(basketCopy)
        } 
        else {
            if (isProductInBasket) {
                const productAlreadyInBasket = basketCopy.find((product) => product.title === productClicked.title);
                productAlreadyInBasket.count++;
                setBasket(basketCopy);
            } 
            else {
                basketCopy.unshift({id:productClicked.id, imageSource:productClicked.imageSource, title:productClicked.title, price:productClicked.price, count:1})
                setBasket(basketCopy)
            }
        }
    }

    const deleteProductFromBasket = (idProductToDelete) => {

    }
    
    return({basket, menu, addProductToBasket, deleteProductFromBasket})
}