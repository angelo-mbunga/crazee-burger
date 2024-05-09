import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import BasketCard from '../../../../reusable-ui/BasketCard';

export default function Body({}) {

  const {basket, isAdminMode} = useContext(OrderContext);

  return (
    <BodyStyled>
        { basket.length > 0
             ? basket.map(({title, imageSource, id, price, count}) => {
                return (
                  <BasketCard
                    key={id}
                    title={title}
                    imageSource={imageSource}
                    price={price}
                    count={count}
                    isHoverable={!isAdminMode}
                  />
                )
              }) 
            : <span className='emptyMessage'>Votre panier est vide</span>
        } 
    </BodyStyled>
  )
}
const BodyStyled = styled.span`
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;    

  .emptyMessage {
      font-size: ${theme.fonts.size.P3};
      color: ${theme.colors.greyDark};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
  }
`;