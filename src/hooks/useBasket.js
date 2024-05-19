import { useState } from "react";
import { deepClone } from "../utils/array";

export function useBasket() {
    const [basket, setBasket] = useState([]);
    const [basketTotalAmount, setBasketTotalAmount] = useState(0);

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
        calculBasketAmount(basketCopy)
    }
    const deleteProductFromBasket = (idProductToDelete) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = basketCopy.filter(product => product.id !== idProductToDelete)
        setBasket(basketUpdated)
        calculBasketAmount(basketUpdated)
    }
    const editProductFromBasket = (EditedProduct) => {
        const basketCopy = deepClone(basket)
        const indexOfProductToEdit = basketCopy.findIndex((menuProduct) => menuProduct.id === EditedProduct.id)
        basketCopy[indexOfProductToEdit] = EditedProduct;
        calculBasketAmount(basketCopy)
        setBasket(basketCopy)
    }
    
    const calculBasketAmount = (basket) => {
        const basketCopy = deepClone(basket)
        let amount = basketCopy.reduce((previousValue, currentValue) => {

            // Dont add products with wrong price value
            if (isNaN(currentValue.price)) { return previousValue }

            return previousValue + currentValue.count * currentValue.price;
        }, 0);
        setBasketTotalAmount(amount)     
    }
    const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
        const newBasketProduct = { id: idProductToAdd, quantity: 1 };
        const newBasket = [newBasketProduct, ...basketCopy];
        setBasket(newBasket);
    }
    const incrementProductAlreadyInBasketQuantity = (idProductToAdd, basketCopy, setBasket) => {
        const productAlreadyInBasket = basketCopy.find((product) => product.id === idProductToAdd);
        productAlreadyInBasket.quantity++;
        setBasket(basketCopy);
    }
    
    return({basket, basketTotalAmount, addProductToBasket, deleteProductFromBasket, editProductFromBasket})
}