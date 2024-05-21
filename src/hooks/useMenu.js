import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { getUser } from "../api/user";

export function useMenu() {
  const [menu, setMenu] = useState([]);

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
  const getUserMenu = async (username) => {
    const user = await getUser(username)
    const menuCopy = deepClone(menu)
    const userMenuData = user.menu
    const personalizeMenu = [userMenuData, ...menuCopy]
    return(personalizeMenu[0])
  }
  
  return({menu, setMenu, addProductToMenu, deleteProductFromMenu, editProductFromMenu, resetMenuData, getUserMenu})
}