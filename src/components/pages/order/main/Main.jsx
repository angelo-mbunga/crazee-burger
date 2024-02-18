import React from 'react'
import styled from 'styled-components';
import {theme} from '../../../../theme/index'
import Menu from './Menu';
import Basket from './Basket';

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
    display: grid;
    grid-template-columns: 20% 80%;
    overflow: auto;
`;
