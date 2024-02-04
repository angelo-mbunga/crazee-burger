import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function OrderPageMain() {
  return (
    <OrderPageMainStyled>
        <h1>OrderPageMain</h1>
    </OrderPageMainStyled>
  )
}

const OrderPageMainStyled = styled.div`
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;
    height: 100%;
`;

