import { useContext, useState } from 'react';
import styled from 'styled-components';
import {HiCursorClick} from 'react-icons/hi';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';

export default function EditForm() {

  const {productInfosToDisplay, IsCardClicked} = useContext(OrderContext)

  return (
    <EditFormStyled>
      {IsCardClicked 
        ?
          <div className='from'>
            <p>1 : {productInfosToDisplay.title}</p>
            <p>2 : {productInfosToDisplay.imageSource}</p>
            <p>3 : {productInfosToDisplay.price}</p>
          </div>
        : <p className='emptyPanelMsg'>Cliquez sur un produit pour le modifier <HiCursorClick className='emptyPanelIcon'/></p>
      }
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`  
  //background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .emptyPanelMsg {
    //background-color: rebeccapurple;
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P1};
    display: flex;

    .emptyPanelIcon {
      padding: 0 8px;
    }
  }
  
`;
