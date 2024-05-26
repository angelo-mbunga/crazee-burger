import React from 'react'
import { theme } from '../../theme'
import styled from 'styled-components';


export default function Loader() {
  return (
    <LoaderStyled>
        Chargement...
    </LoaderStyled>
  )
}
const LoaderStyled = styled.span`
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyDark};  
    display: flex;
    align-items: center;
    justify-content: center;
`;