import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../order/navbar/Navbar';
import Main from './main/Main';
import {theme} from '../../../theme/index';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';

export default function OrderPage() {

  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isSettingsSelected, setIsSettingsSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [isCollasped, setIsCollasped] = useState(false);
  const [isMenuEmpty, setIsMenuEmpty] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.SMALL);

  const addProductToMenu = (newProduct) => {

    const menuCopy = menu;

    const menuUpdated = menuCopy.unshift({id:newProduct.id, imageSource:newProduct.imageSource, title:newProduct.title, price:newProduct.price, quantity:newProduct.quantity, isAvailable:newProduct.isAvailable, isAdvertised:newProduct.isAdvertised})

    setMenu(menuUpdated)
  }
  const deleteProductFromMenu = (idOfProductToDelete) => {

    const menuCopy = [...menu]
   
    const menuUpdated = menuCopy.filter(product => product.id !== idOfProductToDelete)

    setMenu(menuUpdated);
    testMenuLenght(menu)
  }

  const testMenuLenght = (menu) => {

    const nbMenuItems = Object.keys(menu).length;

    if (nbMenuItems <= 1) {
      setIsMenuEmpty(true)
    }

  }
  const orderContextValue = {
    isAdminMode ,
    setIsAdminMode,
    isEditSelected,
    setIsEditSelected,
    isSettingsSelected,
    setIsSettingsSelected,
    isAddSelected,
    setIsAddSelected,
    isCollasped,
    setIsCollasped,
    currentTabSelected,
    setCurrentTabSelected,
    isMenuEmpty,
    setIsMenuEmpty,
    menu,
    addProductToMenu,
    deleteProductFromMenu
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar/>
          <Main/>
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}
const OrderPageStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 98%;
    max-width: 1400px;
    height: 96vh;
    display: flex;
    flex-direction: column;
  }

  ::before {
    content: "";
      background-color: ${theme.colors.primary};
      background-position: center;
      background-size: cover;
      position: absolute;
      width: 100%;
      max-width: 1400px;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
  }
`
