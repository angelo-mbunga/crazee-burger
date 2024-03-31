import {createContext} from 'react'

export default createContext({
  isAdminMode : false,
  setIsAdminMode : () => {},

  isEditSelected : false,
  setIsEditSelected : () => {},

  isSettingsSelected : false,
  setIsSettingsSelected : () => {},

  isAddSelected : false,
  setIsAddSelected : () => {},
  
  isCollasped : false,
  setIsCollasped : () => {},

  currentTabSelected : false,
  setCurrentTabSelected : () => {},
  
  menu : [],
  addProductToMenu : () => {}

});
