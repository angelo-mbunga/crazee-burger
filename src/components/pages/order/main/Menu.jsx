import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
import { theme } from '../../../../theme';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import { formatPrice } from '../../../../utils/maths';

export default function Menu() {

  const [menu, setMenu ] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({title, imageSource, id, price}) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 40px;
  grid-auto-rows: minmax(auto, 330px);
  font-family: "Open Sans", sans-serif;
`;