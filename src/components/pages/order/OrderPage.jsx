import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../order/navbar/Navbar';
import Main from './main/Main';
import {theme} from '../../../theme/index';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { deepClone } from '../../../utils/array';

export default function OrderPage() {

  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isCollasped, setIsCollasped] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [IsCardClicked, setIsCardClicked] = useState(false);
  const [currentProductSelected, setCurrentProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

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
  const displayProductInfos = (idOfProductToDisplay) => {
    if (isAdminMode) return
    const productClicked = menu.find((product) => product.id === idOfProductToDisplay)
    setCurrentProductSelected(productClicked)
    titleEditRef.current.focus();
  }
  const resetMenuData = () => {
    setMenu(fakeMenu.SMALL)
  }
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
    newProduct,
    setNewProduct,
    currentProductSelected,
    setCurrentProductSelected,
    displayProductInfos,
    IsCardClicked,
    setIsCardClicked,
    titleEditRef,
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
