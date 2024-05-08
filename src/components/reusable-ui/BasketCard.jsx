import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/index'
import { formatPrice } from '../../utils/maths';
import { truncate } from '../../utils/maths';

export default function BasketCard({title, imageSource, price, count}) {
  return (
    <BasketCardStyled>
        <div className="cardImage">
            <img src={imageSource} alt={title} />
        </div>
        <div className="cardInfos">
            <span className="title">{truncate(title, 12)}</span> 
            <span className="price">{formatPrice(price)}</span> 
        </div>
        <div className="cardExtras">
            <span className='quantity'>x{count}</span>   
        </div>
    </BasketCardStyled>
  )
}
const BasketCardStyled = styled.div`
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

        .quantity {
        font-size: 33px;
        }
    }
    

`