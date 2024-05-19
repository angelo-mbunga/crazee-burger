import { useState } from "react";
import { deepClone } from "../utils/array";

export function useBasket() {
    const [basket, setBasket] = useState([]);
    const [basketTotalAmount, setBasketTotalAmount] = useState(0);

    const addProductToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = basketCopy.find((product) => {
            if (product.id === productToAdd.id) {
                return true 
            }
        })

        if (isProductAlreadyInBasket) {
            // Increment Product in basket
            const productAlreadyInBasket = basketCopy.find((product) => product.id === productToAdd.id);
            productAlreadyInBasket.quantity++;
            setBasket(basketCopy);
        } 
        else {
            basketCopy.unshift({
                id: productToAdd.id,
                imageSource: productToAdd.imageSource, 
                title: productToAdd.title, 
                price: isNaN(productToAdd.price) ? productToAdd.price = "0.00 €" : productToAdd.price,
                quantity: productToAdd.quantity
            })
            setBasket(basketCopy)
        }
        
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
    
    return({basket, basketTotalAmount, addProductToBasket, deleteProductFromBasket, editProductFromBasket})
}