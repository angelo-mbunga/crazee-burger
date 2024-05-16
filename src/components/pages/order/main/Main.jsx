import React, { useContext } from 'react'
import styled from 'styled-components';
import {theme} from '../../../../theme/index'
import Menu from './Menu';
import Basket from './basket/Basket';
import Admin from './admin/Admin';
import OrderContext from '../../../../context/OrderContext';

export default function Main() {
  const {isAdminMode} = useContext(OrderContext)

  return (
    <MainStyled>
      <Basket/>
      <div className='menu-and-amdin'>
        <Menu/>
          {isAdminMode
            ? null
            : <Admin/>
          }
      </div>
    </MainStyled>
  )
}
const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  flex: 1;
  display: grid;
  grid-template-columns:25% 1fr;
  height: calc(95vh - 10vh);

  .menu-and-amdin{
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
