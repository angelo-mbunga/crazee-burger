import React from 'react'
import styled from 'styled-components';

export default function Basket() {
  return (
    <BasketStyled>
      <div className='header'>total <span className='rer'>23€</span></div>
      <div className='content'>Votre commande est vide</div>
      <div className='footer'>azerty</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`

  .header {
    background-color: red;
    height: 10%;
    .rer {
      background-color: darkcyan;
      float: right;
      height: 100%;
    }
  }
  .content {
    background-color: green;
    height: 80%;
    text-align: center;
  }
  .footer {
    background-color: burlywood;
    text-align: center;
    height: 10%;
  }
`;