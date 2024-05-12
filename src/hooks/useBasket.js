import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export function useBasket() {
    const [basket, setBasket] = useState([]);
    const [basketTotalAmount, setBasketTotalAmount] = useState(0);
    const [menu] = useState(fakeBasket.LARGE);

    const addProductToBasket = (ProductToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductInBasket = basketCopy.find((product) => {
            if (product.title === ProductToAdd.title) {
                return true 
            }
        })

        if (basketCopy.length === 0) {
            basketCopy.unshift({id:ProductToAdd.id, imageSource:ProductToAdd.imageSource, title:ProductToAdd.title, price:ProductToAdd.price, count:1})
            setBasket(basketCopy)
        } 
        else {
            if (isProductInBasket) {
                const productAlreadyInBasket = basketCopy.find((product) => product.title === ProductToAdd.title);
                productAlreadyInBasket.count++;
                setBasket(basketCopy);
            } 
            else {
                basketCopy.unshift({id:ProductToAdd.id, imageSource:ProductToAdd.imageSource, title:ProductToAdd.title, price:ProductToAdd.price, count:1})
                setBasket(basketCopy)
            }
        }
        calculBasketAmount(basketCopy)
    }
    const deleteProductFromBasket = (idProductToDelete) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = basketCopy.filter(product => product.id !== idProductToDelete)
        setBasket(basketUpdated)
        calculBasketAmount(basketUpdated)
    }
    const calculBasketAmount = (basket) => {
        const basketCopy = deepClone(basket)
        let amount = basketCopy.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.count * currentValue.price;
        }, 0);
        setBasketTotalAmount(amount)     
    }
    
    return({basket, menu, basketTotalAmount, addProductToBasket, deleteProductFromBasket})
}