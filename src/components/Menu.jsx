import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './reusable-ui/Product';
import { theme } from '../theme';
import { fakeMenu2 } from '../fakeData/fakeMenu';
import PrimaryButton from './reusable-ui/PrimaryButton';
import { ajustPrice, formatPrice, truncate } from '../utils/maths';

export default function Menu() {

  const [menu, setMenu ] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => {
        return (
          <div key={product.id} className='card'>
            <img src={product.imageSource} alt="item-img" className='card-img'/>  
            <div className='card-info'>
              <p className='item-title'>{truncate(product.title, 18)}</p>
              <div className='card-extra'>
                  <p className='item-price'>{formatPrice(ajustPrice(product.price))}</p>
                  <PrimaryButton className={"card-cta"} label={"Ajouter"}></PrimaryButton>
              </div>
            </div>
          </div>
        )
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

  .card {
    background: #F5F5F7;
    min-width: auto;
    max-width: 240px;
    height: max-content;
    padding: 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: 15px;
  }
  .card-img {
    width: 200px;
    height: 150px;
    display: block;
    margin: auto;
  }
  .card-info {
    width: 100%;
  }
  .item-title {
    text-align: left;
    font-family: "Amatic SC", cursive;
    font-size: 32px;
    font-weight: 600;
  }
  .item-price {
    color: ${theme.colors.primary};
    width: 50%;
    padding: 16px 0;
  }
  .card-extra {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8px;
  }
  .card-cta {
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    border: none;
    padding: 16px 24px;
    font-size: ${theme.fonts.size.P0};
    text-overflow: ellipsis;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    margin: auto;
  }
  .card-cta:hover {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    outline: 2px solid ${theme.colors.primary};
    outline-offset: -2px;
    transition: 0.5s;
  }
  .card-cta:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }  
`;