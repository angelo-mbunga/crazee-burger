import React from 'react'
import {theme} from '../../../../../../theme/index';
import styled from 'styled-components';
import { BASKET_MESSAGE } from '../../../../../../enums/product';

export default function EmptyBasket({isLoading}) {
  return (
    <EmptyBasketStyled>
        <span className='basketMessage'>{isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}</span>
    </EmptyBasketStyled>
  )
}
const EmptyBasketStyled = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    .basketMessage {
      font-size: ${theme.fonts.size.P3};
      color: ${theme.colors.greyDark};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
`;
