import {theme} from '../../../../../../theme/index';
import styled from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import BasketCard from '../../../../../reusable-ui/BasketCard';
import { findInArray, isArrayEmpty } from '../../../../../../utils/array';
import { formatPrice, ajustPrice, truncate } from '../../../../../../utils/maths';
import Loader from '../../../../../reusable-ui/Loader';
import EmptyBasket from './EmptyBasket';
import { CSSTransition,TransitionGroup } from "react-transition-group";
import { fadeLeftRightAmimation } from '../../../../../../theme/animations';
import { convertStringToBoolean } from '../../../../../../utils/string';
import { BASKET_MESSAGE, IMAGE_DEFAULT_PRODUCT } from '../../../../../../enums/product';

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
    setIsCardClicked,
    username
  } = useContext(OrderContext);

  const handleCardClick = (idProductClicked) => {
    setIsCollasped(true)
    setIsCardClicked(true) 
    setCurrentTabSelected("edit")
    displayProductInfos(idProductClicked)
  }
  const handleCardDelete = (event, idProductToDelete) => { 
    event.stopPropagation()
    deleteProductFromBasket(idProductToDelete, username)
    setIsCardClicked(false)
  }
  const displayProductInfos = async (IdProductToDisplay) => {
    const produitClicked = findInArray(IdProductToDisplay, menu)
    if (isAdminMode) return
      await setCurrentProductSelected(produitClicked)
      titleEditRef.current.focus()
  }
  const checkIfProductSelected = (productFromMenuId, productselectedId) => {
    return productFromMenuId === productselectedId
  }

  if (basket === undefined) return <Loader/>

  return (
    <BodyStyled>
      { basket.length > 0
        ? 
          <TransitionGroup>
            {basket.map(({id, quantity}) => {
              const menuProduct = menu.find((product) => product.id === id);
                return (
                  <CSSTransition classNames={'fadeLeftRightAnimation'} key={id} timeout={300}>
                      <BasketCard
                        className={'basketCard'}
                        title={truncate(menuProduct.title,12)}
                        imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_DEFAULT_PRODUCT }
                        /* @TODO : Fix ajustPrice bug */
                        price={convertStringToBoolean(menuProduct.isAvailable) ? formatPrice(menuProduct.price) : BASKET_MESSAGE.NOT_AVAILABLE }
                        isAvailable={menuProduct.isAvailable}
                        quantity={quantity}
                        onCardClick={() => handleCardClick(id)}
                        onDeleteBtnClick={(event) => handleCardDelete(event, id)}
                        isAdminMode={!isAdminMode}
                        isSelected={checkIfProductSelected(id,currentProductSelected.id)}
                      />
                  </CSSTransition>
              )
            })}
          </TransitionGroup> 
        : 
          <EmptyBasket isLoading={isArrayEmpty(menu)}/>
        
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

  ${fadeLeftRightAmimation}

`;