import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
import { theme } from '../../../../theme';
import { fakeMenu1 } from '../../../../fakeData/fakeMenu';
import { formatPrice, ajustPrice } from '../../../../utils/maths';

export default function Menu() {

  const [menu, setMenu ] = useState(fakeMenu1);
  
  function handleDelete(id) {

    const menuCopy = [...menu]
   
    const menuUpdated = menuCopy.filter(item => item.id !== id)

    setMenu(menuUpdated);
  }
  return (
    <MenuStyled>
      {menu.map(({title, imageSource, id, price}) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            onClick={() => handleDelete(id)}
          />
        )
      })}
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
`;