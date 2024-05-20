import { useState } from "react";
import { deepClone } from "../utils/array";

export function useBasket() {
    const [basket, setBasket] = useState([]);

    const addProductToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = basketCopy.find((product) => {
            if (product.id === productToAdd.id) { return true }
        })

        if (isProductAlreadyInBasket) {
            incrementProductAlreadyInBasketQuantity(productToAdd.id, basketCopy, setBasket);
            return
        }
        createNewBasketProduct(productToAdd.id, basketCopy, setBasket);
    }
    const deleteProductFromBasket = (idProductToDelete) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = basketCopy.filter(product => product.id !== idProductToDelete)
        setBasket(basketUpdated)
    }
    const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
        // only adding extra infos of the new product instead of creating a whole new product frop scratch
        const newBasketProduct = { id: idProductToAdd, quantity: 1 };
        const newBasket = [newBasketProduct, ...basketCopy];
        setBasket(newBasket);
    }
    const incrementProductAlreadyInBasketQuantity = (idProductToAdd, basketCopy, setBasket) => {
        const productAlreadyInBasket = basketCopy.find((product) => product.id === idProductToAdd);
        productAlreadyInBasket.quantity++;
        setBasket(basketCopy);
    }
    
    return({basket, addProductToBasket, deleteProductFromBasket})
}