import React from 'react'
import styled from 'styled-components';
import {theme} from '../../theme/index'
import Basket from '../Basket';
import Menu from '../Menu';

export default function Main() {
  return (
    <MainStyled>
      <Basket/>
      <Menu/>
    </MainStyled>
  )
}
const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 0 24px;
`;
