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
    padding: 12px 0;
`;