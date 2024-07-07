import { useState } from "react";
import { deepClone } from "../utils/array";
import { saveInLocalStrorage } from "../utils/localstorage";

export function useBasket() {
    const [basket, setBasket] = useState([]);

    const addProductToBasket = (productToAdd, username) => {
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = basketCopy.find((product) => {
            if (product.id === productToAdd.id) { return true }
        })

        if (isProductAlreadyInBasket) {
            incrementProductAlreadyInBasketQuantity(productToAdd.id, basketCopy, setBasket);
            saveInLocalStrorage(username, basketCopy)
            return
        }
        createNewBasketProduct(productToAdd.id, basketCopy, setBasket, username);
    }
    const deleteProductFromBasket = (idProductToDelete, username) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = basketCopy.filter(product => product.id !== idProductToDelete)
        setBasket(basketUpdated)
        saveInLocalStrorage(username, basketUpdated)
    }
    const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
        // only adding extra infos of the new product instead of creating a whole new product from scratch
        const newBasketProduct = { id: idProductToAdd, quantity: 1 };
        const newBasket = [newBasketProduct, ...basketCopy];
        setBasket(newBasket);
        saveInLocalStrorage(username, newBasket)
    }
    const incrementProductAlreadyInBasketQuantity = (idProductToAdd, basketCopy, setBasket) => {
        const productAlreadyInBasket = basketCopy.find((product) => product.id === idProductToAdd);
        productAlreadyInBasket.quantity++;
        setBasket(basketCopy);
    }
    return({basket, setBasket, addProductToBasket, deleteProductFromBasket})
}