import React, { useContext } from 'react'
import styled from 'styled-components';
import {theme} from '../../../../theme/index'
import Menu from './Menu';
import Basket from './Basket';
import Admin from '../admin/Admin';
import OrderContext from '../../../../context/OrderContext';

export default function Main() {
  const {isAdminMode,setAdminMode} = useContext(OrderContext)
  console.log(isAdminMode)

  return (
    <MainStyled>
      <Basket/>
      <Menu/>
      {isAdminMode
          ? null
          : <Admin/>
      }
    </MainStyled>
  )
}
const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  flex: 1;
  display: grid;
  grid-template-columns:20% 1fr;
  overflow-y: hidden;
`;
