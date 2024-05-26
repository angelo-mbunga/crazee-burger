import React from 'react'
import { theme } from '../../../../../theme'
import styled from 'styled-components';


export default function Loader() {
  return (
    <LoaderStyled>
        <span className='loaderMessage'>chargement en cours...</span>
    </LoaderStyled>
  )
}
const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .loaderMessage {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyDark};  
  }
`;