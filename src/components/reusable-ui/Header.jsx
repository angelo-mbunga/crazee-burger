import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/index';

export default function Header({children}) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}
const HeaderStyled = styled.div`
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.P2};
    padding: 12px 0;
`;