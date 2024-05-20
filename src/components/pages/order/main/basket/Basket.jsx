import React from 'react'
import styled from 'styled-components';
import Total from './Total';
import Title from './Title';
import Body from './Body';

export default function Basket() {
  return (
    <BasketStyled>
      <Title title={"votre commande"}/>
      <Body/>
      <Total/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  font-family: "Amatic SC", cursive;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
`;

