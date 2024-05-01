import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
import { theme } from '../../../../theme';
import { formatPrice, ajustPrice } from '../../../../utils/maths';
import MenuEmpty from './MenuEmpty';
import OrderContext from '../../../../context/OrderContext';

export default function Menu() {

  const {isAdminMode, menu, currentProductSelected, deleteProductFromMenu, resetMenuData, displayProductInfos, setIsCardClicked, setIsCollasped, setCurrentTabSelected, titleEditRef} = useContext(OrderContext);

  const checkIfProductSelected = (productFromMenuId,productselectedId) => {
    return productFromMenuId === productselectedId
  }

  const handleClick = async (idProductToDisplay) => { 
    setIsCardClicked(true) 
    setIsCollasped(true) 
    await setCurrentTabSelected('edit')
    displayProductInfos(idProductToDisplay)
  }
  const handleCardDelete = (event, IdProductToDelete) => { 
    event.stopPropagation();
    deleteProductFromMenu(IdProductToDelete)
    if (IdProductToDelete === currentProductSelected.id) {
      setIsCardClicked(false) 
    }
    titleEditRef.current.focus();

  }
  const handleAddToBasket = (event, IdProductToAdd) => { 
    event.stopPropagation();
    //IdProductToAdd(IdProductToDelete)
  }

  return (
    <MenuStyled>
      {menu.length === 0
        ? !isAdminMode 
            ? <MenuEmpty 
                text1="Le menu est vide ?" 
                text2="cliquez ci-dessous pour le réinitialiser" 
                btnLabel='Générer nouveaux produits' 
                btnClassName='generate-prodcuts-btn'
                onClick={resetMenuData}
              /> 
            : <MenuEmpty 
                text1="Victime de notre success !" 
                text2="De nouvelles recettes arrivent bientot"
              />
        : menu.map(({title, imageSource, id, price}, index) => {
            return (
              <Card
                index={index}
                key={id}
                title={title}
                imageSource={imageSource}
                leftDescription={formatPrice(price)}
                onCloseBtnClick={(event) => handleCardDelete(event, id)}
                onCardClick={() => handleClick(id)}
                onAddBtnClick={(event) => handleAddToBasket(event)}
                isHoverable={!isAdminMode}
                isSelected={checkIfProductSelected(id,currentProductSelected.id)}
              />
            )
          })
      } 
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background: ${theme.colors.background_white};
  padding: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 40px;
  font-family: "Open Sans", sans-serif;
  overflow: scroll;
  overflow-x: unset;

  .generate-prodcuts-btn {
    font-family: "Open Sans", sans-serif;
    width: 50%;
    margin: auto;
    border-radius: ${theme.borderRadius.round};
    border: none;
    padding: 16px 0;
    font-size: ${theme.fonts.size.P0};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    }
  .generate-prodcuts-btn:hover {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    outline: 2px solid ${theme.colors.primary};
    outline-offset: -2px;
  }
`;
