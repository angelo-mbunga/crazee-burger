import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import BasketCard from '../../../../reusable-ui/BasketCard';
import { findInArray, isArrayEmpty } from '../../../../../utils/array';
import Loader from '../../../../reusable-ui/Loader';
import EmptyBasket from './EmptyBasket';
import { CSSTransition,TransitionGroup } from "react-transition-group";

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
                  <CSSTransition appear={true} classNames={'fadeInOut'} key={id} timeout={500}>
                      <BasketCard
                        className={'basketCard'}
                        title={menuProduct.title}
                        imageSource={menuProduct.imageSource}
                        price={menuProduct.price}
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

  .fadeInOut-enter{
    transform: translateX(100px);
    opacity: 0%; 
  }
  .fadeInOut-enter-active{
    transform: translateX(0px);
    opacity: 100%; 
    transition: 0.4s;
    ::before  {
      background: ${theme.colors.background_white};
    }
  }
  
  .fadeInOut-appear{
    transform: translateX(100px);
    opacity: 0%; 
  }
  .fadeInOut-appear-active{
    transform: translateX(0px);
    opacity: 100%; 
    transition: 0.4s;
    ::before  {
      background: ${theme.colors.background_white};
    }
  }

  .fadeInOut-exit{
    transform: translateX(0px);
    opacity: 100%; 
  }
  .fadeInOut-exit-active{
    transform: translateX(-100px);
    opacity: 0%; 
    transition: 0.4s;
    ::before  {
      background: ${theme.colors.background_white};
    }
  } 

`;