import React from 'react'
import styled from 'styled-components';
import Total from './Total';
import Title from './Title';
import Body from './Body';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import Loader from '../menu/Loader';
import { isArrayEmpty } from '../../../../../utils/array';

export default function Basket() {

  const { menu } = useContext(OrderContext);

  if (isArrayEmpty(menu)) return <Loader/>

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

