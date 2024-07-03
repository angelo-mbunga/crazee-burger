import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../order/navbar/Navbar';
import Main from './main/Main';
import {theme} from '../../../theme/index';
import OrderContext from '../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { useMenu } from '../../../hooks/useMenu';
import { useBasket } from '../../../hooks/useBasket';
import { initializeUserSession } from '../order/helpers/initializeUserSession'


export default function OrderPage() {

  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isCollasped, setIsCollasped] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [IsCardClicked, setIsCardClicked] = useState(false);
  const [currentProductSelected, setCurrentProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const {menu, setMenu, addProductToMenu, deleteProductFromMenu, editProductFromMenu, resetMenuData, getUserMenu} = useMenu();
  const {basket, setBasket, addProductToBasket, deleteProductFromBasket, productToAddToBasket} = useBasket();
  const {username} = useParams();
  // TODO : find proper file to put this in
  const displayProductInfos = (idOfProductToDisplay) => {
    if (isAdminMode) return
    const productClicked = menu.find((product) => product.id === idOfProductToDisplay)
    setCurrentProductSelected(productClicked)
    titleEditRef.current.focus();
  }

  useEffect( () =>  {
    initializeUserSession(username, setMenu, setBasket)
  }, []);

  const orderContextValue = {
    //@TODO : check why isModeAdmin is reverse
    isAdminMode ,
    setIsAdminMode,
    isCollasped,
    setIsCollasped,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    addProductToMenu,
    deleteProductFromMenu,
    editProductFromMenu,
    resetMenuData,
    getUserMenu,
    newProduct,
    setNewProduct,
    currentProductSelected,
    setCurrentProductSelected,
    displayProductInfos,
    IsCardClicked,
    setIsCardClicked, 
    titleEditRef,
    basket,
    addProductToBasket,
    deleteProductFromBasket,
    productToAddToBasket,
    username
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
