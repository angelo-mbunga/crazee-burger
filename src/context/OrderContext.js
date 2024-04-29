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
  inputComponentRef : () => {},

  newProduct : {},
  setNewProduct :  () => {},

  currentProductSelected : {},
  setCurrentProductSelected :  () => {},
  displayProductInfos :  () => {},

  IsCardClicked : false,
  SetIsCardClicked : () => {},
});
