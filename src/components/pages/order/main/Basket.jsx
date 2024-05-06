import React from 'react'
import {theme} from '../../../../theme/index';
import styled from 'styled-components';

export default function Basket(products) {
  return (
    <BasketStyled>
      <div className='header'>
        <span className='title'>total</span>
        <span className='price'>23€</span>
      </div>
      <div className='content'>
        { !products
            ? <span>Votre panier est plein</span>
            : <span>Votre panier est vide</span>
        }
      </div>
      <div className='footer'>    
        <span>Le gout est doux</span>
      </div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`

  font-family: "Amatic SC", cursive;
  display: flex;
  flex-direction: column;

  .header {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.fonts.size.P3};
    padding: 12px 0;
  }
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
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    padding: 12px 0;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};;
  }
`;