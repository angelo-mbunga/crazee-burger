import React, { useContext } from 'react'
import styled from 'styled-components';
import Total from './Total';
import { formatPrice, ajustPrice } from '../../../../../utils/maths'
import Title from './Title';
import Body from './Body';
import OrderContext from '../../../../../context/OrderContext';

export default function Basket() {
  
  const { basketTotalAmount } = useContext(OrderContext);

  return (
    <BasketStyled>
      <Title title={"votre commande"}/>
      <Body/>
      <Total amoutToPay={formatPrice(ajustPrice(basketTotalAmount))}/>
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