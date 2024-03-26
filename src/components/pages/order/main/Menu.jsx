import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
import { theme } from '../../../../theme';
import { fakeMenu } from '../../../../fakeData/fakeMenu';
import { formatPrice, ajustPrice } from '../../../../utils/maths';
import MenuEmpty from './MenuEmpty';
import OrderContext from '../../../../context/OrderContext';

export default function Menu() {

  const [menu, setMenu ] = useState(fakeMenu.SMALL);
  const [isMenuEmpty, setIsMenuEmpty ] = useState(false);
  const {isAdminMode,setAdminMode} = useContext(OrderContext)
  
  function handleDelete(id) {

    const menuCopy = [...menu]
   
    const menuUpdated = menuCopy.filter(item => item.id !== id)

    setMenu(menuUpdated);
    testMenu(menu)
  }

  function testMenu(menu) {

    const nbMenuItems = Object.keys(menu).length;

    if (nbMenuItems <= 1) {
      setIsMenuEmpty(true)
    }

  }
  
  return (
    <MenuStyled>
      {isMenuEmpty
        ? !isAdminMode 
            ? <MenuEmpty 
                text1="Le menu est vide ?" 
                text2="cliquez ci-dessous pour le réinitialiser" 
                btnLabel='Générer nouveaux produits' 
                btnClassName='generate-items-btn'
              /> 
            : <MenuEmpty 
                text1="Victime de notre success !" 
                text2="De nouvelles recettes arrivent bientot"
              />
        : menu.map(({title, imageSource, id, price}) => {
            return (
              <Card
                key={id}
                title={title}
                imageSource={imageSource}
                leftDescription={formatPrice(price)}
                onClick={() => handleDelete(id)}
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

  .generate-items-btn {
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
  .generate-items-btn:hover {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    outline: 2px solid ${theme.colors.primary};
    outline-offset: -2px;
  }
`;
