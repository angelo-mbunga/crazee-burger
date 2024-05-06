import React from 'react'
import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';

export default function Basket(products) {
  return (
    <BasketStyled>
      <Header>zeze</Header>
      <div className='content'>
        { !products
            ? <span>Votre panier est plein</span>
            : <span>Votre panier est vide</span>
        }
      </div>
      <Header>zeze</Header>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`

  font-family: "Amatic SC", cursive;
  display: flex;
  flex-direction: column;

  .title, .price {
    padding: 0 16px;
  }
  .content {
    background-color: ${theme.colors.background_white};
    text-align: center;
    font-size: ${theme.fonts.size.P2};
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);

  }
`;