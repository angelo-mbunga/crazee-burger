import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export function useMenu() {
    const [menu, setMenu] = useState(fakeMenu.SMALL);

    const addProductToMenu = (newProduct) => {
      const menuCopy = deepClone(menu)
      menuCopy.unshift({id:newProduct.id, imageSource:newProduct.imageSource, title:newProduct.title, price:newProduct.price, quantity:newProduct.quantity, isAvailable:newProduct.isAvailable, isAdvertised:newProduct.isAdvertised})
      setMenu(menuCopy)
    }
    const deleteProductFromMenu = (idOfProductToDelete) => {
      const menuCopy = deepClone(menu)
      const menuUpdated = menuCopy.filter(product => product.id !== idOfProductToDelete)
      setMenu(menuUpdated)
    }
    const editProductFromMenu = (EditedProduct) => {
      const menuCopy = deepClone(menu)
      const indexOfProductToEdit = menuCopy.findIndex((menuProduct) => menuProduct.id === EditedProduct.id)
      menuCopy[indexOfProductToEdit] = EditedProduct;
      setMenu(menuCopy)
    }
    const resetMenuData = () => {
      setMenu(fakeMenu.SMALL)
    }

    return({menu, addProductToMenu, deleteProductFromMenu, editProductFromMenu, resetMenuData})
}