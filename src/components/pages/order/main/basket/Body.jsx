import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import { formatPrice } from '../../../../../utils/maths';
import { truncate } from '../../../../../utils/maths';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function Body({}) {

  const {isAdminMode, basket} = useContext(OrderContext);

  return (
    <BodyStyled>
        { basket.length > 0
             ? basket.map(({title, imageSource, id, price}) => {
                return (
                  <div className="basketCard">
                    <div className="cardImage">
                      <img src={imageSource} alt={title} />
                    </div>
                    <div className="cardInfos">
                      <span className="title">{truncate(title, 12)}</span> 
                      <span className="price">{formatPrice(price)}</span> 
                    </div>
                    <div className="cardExtras">
                      <span className='quantity'>x12</span>   
                    </div>
                  </div>
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



    .basketCard {
      display: flex;
      flex-direction: row;
      width: 100%;
      box-sizing: border-box;
      height: 86px;
      margin-top: 8px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      .cardImage {
        background-color: rebeccapurple;
        padding: 8px;
        width: 40%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .cardInfos {
        background-color: red;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          margin: 4px 0;
        }
      }
      .cardExtras {
        background-color: green;
        width: 20%;
      }
    }

`;