import React, { useContext } from 'react'
import styled from 'styled-components';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths'
import Title from './Title';
import Body from './Body';
import OrderContext from '../../../../../context/OrderContext';

export default function Basket() {
  
  //const { productToAddToBasket } = useContext(OrderContext);

  return (
    <BasketStyled>
      <Title title={"votre commande"}/>
      <Body/>
      <Total amoutToPay={formatPrice(0)}/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  font-family: "Amatic SC", cursive;
  display: flex;
  flex-direction: column;
`;