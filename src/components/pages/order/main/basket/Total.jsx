import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { ajustPrice, calculateAmoutToPay, formatPrice } from '../../../../../utils/maths';

export default function Total() {

  const { basket, menu } = useContext(OrderContext) 
  const amountToPay = calculateAmoutToPay(basket, menu);

  return (
    <Header>
      <TotalStyled>
        <span className="title">total</span>
        <span className="amount">{formatPrice(ajustPrice(amountToPay))}</span>
      </TotalStyled>
    </Header>
  )
}
 const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 2px;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P3};
`;

