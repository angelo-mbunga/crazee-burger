import {createContext} from 'react'

export default createContext({
  isAdminMode : false,
  setIsAdminMode : () => {},
  
  isCollasped : false,
  setIsCollasped : () => {},

  currentTabSelected : false,
  setCurrentTabSelected : () => {},
  
  menu : [],
  addProductToMenu : () => {},
  deleteProductFromMenu : () => {},
  editProductFromMenu : () => {},
  resetMenuData : () => {},
  getUserMenu : () => {},
  titleEditRef : {},

  newProduct : {},
  setNewProduct :  () => {},

  currentProductSelected : {},
  setCurrentProductSelected :  () => {},
  displayProductInfos :  () => {},

  IsCardClicked : false,
  setIsCardClicked : () => {},

  basket : [],
  addProductToBasket : () => {},
  deleteProductFromBasket : () => {},
});
