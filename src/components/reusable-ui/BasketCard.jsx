import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/index'
import { formatPrice, ajustPrice } from '../../utils/maths';
import { truncate } from '../../utils/maths';
import { MdDeleteForever } from "react-icons/md";
import { defaultImage } from '../../enums/product';


export default function BasketCard({title, imageSource, price, count, onClick}) {

    return (
        <BasketCardStyled>
            <div className="cardImage">
                <img src={imageSource ? imageSource : defaultImage} alt={title} />
            </div>
            <div className="cardInfos">
                <span className="title">{truncate(title, 12)}</span>
                {/* @TODO : Fix ajustPrice bug */}
                <span className="price">{formatPrice(price)}</span> 
            </div>
            <div className="cardExtras">
                <span className='quantity'>x{count}</span>
                <MdDeleteForever className='deleteCardButton' onClick={onClick}/>
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
    margin-bottom: 8px;
    box-shadow: -4px 4px 15px 0px rgb(0 0 0 / 20%);

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
        background-color: orange;
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
        .deleteCardButton{
            font-size: 33px;
            color: orange;
        }
        .deleteCardButton {
            display: none;
        }
    }
    .cardExtras:hover {
        background-color: red;
        cursor: pointer;

        .deleteCardButton {
            color: white;
            transform: scale(1.1);
        }
        .deleteCardButton:active {
            color: white;
        }
        .quantity {
            display: none;
        }
        .deleteCardButton {
            display: block;
        }

    }
`
