import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../order/navbar/Navbar';
import Main from './main/Main';
import {theme} from '../../../theme/index';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from './main/admin/panels/AddForm';

export default function OrderPage() {

  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isCollasped, setIsCollasped] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [IsCardClicked, SetIsCardClicked] = useState(false);
  const [cardStyle, setCardStyle] = useState("card");
  const [productInfosToDisplay, setProductInfosToDisplay] = useState(EMPTY_PRODUCT);
  const inputComponentRef = useRef();

  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const addProductToMenu = (newProduct) => {
    const menuCopy = menu;
    const menuUpdated = menuCopy.unshift({id:newProduct.id, imageSource:newProduct.imageSource, title:newProduct.title, price:newProduct.price, quantity:newProduct.quantity, isAvailable:newProduct.isAvailable, isAdvertised:newProduct.isAdvertised})
    setMenu(menuUpdated)
  }
  const deleteProductFromMenu = (idOfProductToDelete) => {
    const menuCopy = [...menu]
    const menuUpdated = menuCopy.filter(product => product.id !== idOfProductToDelete)
    setMenu(menuUpdated)
  }
  const editProductFromMenu = (EditedProduct) => {
    const menuCopy = JSON.parse(JSON.stringify(menu))
    const indexOfProductToEdit = menuCopy.findIndex((menuProduct) => menuProduct.id === EditedProduct.id)
    menuCopy[indexOfProductToEdit] = EditedProduct;
    setMenu(menuCopy)
  }
  const displayProductInfos = (idOfProductToDisplay) => {
    const menuCopy = [...menu]
    const productClicked = menuCopy.filter(product => product.id == idOfProductToDisplay)
    setProductInfosToDisplay(productClicked[0])
    SetIsCardClicked(true) 
    setIsCollasped(false) 
    setCurrentTabSelected('edit')
    toogleCardCss()
    //inputComponentRef.current.focus();
  }
  const toogleCardCss = (e) => {
/*     if (cardStyle !== "card") setCardStyle("card");
    else setCardStyle("card card-clicked"); */
  }
  const resetMenuData = () => {
    setMenu(fakeMenu.SMALL)
  }
  const orderContextValue = {
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
    productInfosToDisplay,
    setProductInfosToDisplay,
    displayProductInfos,
    IsCardClicked,
    SetIsCardClicked,
    inputComponentRef,
    cardStyle,
    setCardStyle
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
