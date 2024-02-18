import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './reusable-ui/Product';
import { theme } from '../theme';
import { fakeMenu2 } from '../fakeData/fakeMenu';

export default function Menu() {

  const [menu, setMenu ] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => {
        return <Product {...product} />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  //padding: 50px 50px 150px;
  background: #F5F5F7;
  padding: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 40px;
  grid-auto-rows: minmax(auto, 330px);
  font-family: "Open Sans", sans-serif;
`;