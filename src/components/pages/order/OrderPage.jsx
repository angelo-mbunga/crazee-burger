import React from 'react';
import styled from 'styled-components';
import Navbar from '../../reusable-ui/Navbar';
import Main from './main/Main';
import {theme} from '../../../theme/index';

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className='container'>      
        <Navbar/>
        <Main/>
      </div>
    </OrderPageStyled>
  )
}
const OrderPageStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 98%;
    max-width: 1400px;
    height: 96vh;
    display: flex;
    flex-direction: column;
  }

  ::before {
    content: "";
      background-color: ${theme.colors.primary};
      background-position: center;
      background-size: cover;
      position: absolute;
      width: 100%;
      max-width: 1400px;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
  }
`
