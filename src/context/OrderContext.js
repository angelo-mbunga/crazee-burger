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

  newProduct : [],
  setNewProduct :  () => {},

  productInfosToDisplay : [],
  setProductInfosToDisplay :  () => {},
  displayProductInfos :  () => {},

  IsCardClicked : false,
  SetIsCardClicked : () => {},
});
