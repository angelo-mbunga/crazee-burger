import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import BasketCard from '../../../../reusable-ui/BasketCard';
import { findInArray } from '../../../../../utils/array';

export default function Body() {

  const {
    basket, 
    menu, 
    isAdminMode, 
    deleteProductFromBasket, 
    setCurrentTabSelected,
    setIsCollasped, 
    setCurrentProductSelected, 
    currentProductSelected, 
    titleEditRef, 
    setIsCardClicked
  } = useContext(OrderContext);

  const handleCardClick = (idProductClicked) => {
    setIsCollasped(true)
    setIsCardClicked(true) 
    setCurrentTabSelected("edit")
    displayProductInfos(idProductClicked)
  }
  const handleCardDelete = (event, idProductToDelete) => { 
    event.stopPropagation()
    deleteProductFromBasket(idProductToDelete)
    setIsCardClicked(false)
  }
  const displayProductInfos = async (IdProductToDisplay) => {
    const produitClicked = findInArray(IdProductToDisplay, menu)
    if (isAdminMode) return
      await setCurrentProductSelected(produitClicked)
      titleEditRef.current.focus()
  }
  const checkIfProductSelected = (productFromMenuId,productselectedId) => {
    return productFromMenuId === productselectedId
  }

  return (
    <BodyStyled>
        { basket.length > 0
          ? basket.map(({id, quantity}) => {
              const menuProduct = menu.find((product) => product.id === id);
                return (
                  <BasketCard
                    key={id}
                    title={menuProduct.title}
                    imageSource={menuProduct.imageSource}
                    price={menuProduct.price}
                    quantity={quantity}
                    onCardClick={() => handleCardClick(id)}
                    onDeleteBtnClick={(event) => handleCardDelete(event, id)}
                    isAdminMode={!isAdminMode}
                    isSelected={checkIfProductSelected(id,currentProductSelected.id)} 
                  />
            )
          }) 
          : <span className='emptyMessage'>Votre panier est vide</span>
        } 
    </BodyStyled>
  )
}
const BodyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;    
  overflow: auto;
  overflow-x: hidden;

  .emptyMessage {
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyDark};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;