import React from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../theme/index'
import { formatPrice, ajustPrice } from '../../utils/maths';
import { truncate } from '../../utils/maths';
import { MdDeleteForever } from "react-icons/md";
import { defaultImage } from '../../enums/product';


export default function BasketCard({title, imageSource, price, count, onDeleteBtnClick, onCardClick, isAdminMode, isSelected}) {

    return (
        <BasketCardStyled onClick={onCardClick} isAdminMode={isAdminMode} isSelected={isSelected}>
            <div className="cardImage">
                <img src={imageSource ? imageSource : defaultImage} alt={title} />
            </div>
            <div className="cardInfos">
                <span className="title">{truncate(title,12)}</span>
                {/* @TODO : Fix ajustPrice bug */}
                <span className="price">{formatPrice(price)}</span> 
            </div>
            <div className="cardExtras">
                <span className='quantity'>x {count}</span>
                <MdDeleteForever className='deleteCardButton' onClick={onDeleteBtnClick}/>
            </div>
        </BasketCardStyled>  
    )
}
const BasketCardStyled = styled.div`

    ${(props) => props.isSelected && props.isAdminMode && clickedStyle};

    background: ${theme.colors.background_white};
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    height: 86px;
    margin-bottom: 8px;
    box-shadow: -4px 4px 15px 0px rgb(0 0 0 / 20%);
    cursor: ${(props) => props.isAdminMode ? "pointer" : "auto"};
    border-radius: ${theme.borderRadius.round};

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .cardImage {
        padding: 4px 8px;
        width: 40%;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .cardInfos {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        
        span {
            margin: 4px 0;
        }
        .title {
            font-size: ${theme.fonts.size.P3};
        }
        .price {
            font-family: "Open Sans", sans-serif;
            font-size: ${theme.fonts.size.P0};
            color: ${theme.colors.primary};
        }
    }
    .cardExtras {
        width: 20%;

        .quantity {
            color: ${theme.colors.primary};
            font-family: "Open Sans", sans-serif;
            font-size: ${theme.fonts.size.P1};
        }
        .deleteCardButton {
            display: none;
        }
    }
    .cardExtras:hover {
        cursor: pointer;
        background-color: ${theme.colors.redTertiary};
        border-radius: 0 ${theme.borderRadius.round} ${theme.borderRadius.round} 0;
        
        .deleteCardButton {
            color: ${theme.colors.white};
            font-size: ${theme.fonts.size.P3};
        }
        .deleteCardButton:hover {
            transform: scale(1.1);
        }
        .deleteCardButton:active {
            color: ${theme.colors.dark};
        }
        .quantity {
            display: none;
        }
        .deleteCardButton {
            display: block;
        }

    }
`
const clickedStyle = css `   
    .cardExtras {
        border-radius: 0 ${theme.borderRadius.round} ${theme.borderRadius.round} 0; 
    }
    .cardImage {
        border-radius: ${theme.borderRadius.round} 0 0 ${theme.borderRadius.round} ; 
    }
    .cardImage, .cardInfos, .cardExtras {
        background: ${theme.colors.primary}; 
    }
    .price, .quantity {
        color: ${theme.colors.white}!important;
    }
    .title {
        color: ${theme.colors.dark};
    }
`