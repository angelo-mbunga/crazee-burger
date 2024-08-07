import React from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../theme/index'
import { MdDeleteForever } from "react-icons/md";
import { IMAGE_DEFAULT_PRODUCT } from '../../enums/product';
import CasinoEffect from './CasinoEffect';


export default function BasketCard({title, imageSource, price, quantity, onDeleteBtnClick, onCardClick, isAdminMode, isSelected}) {
    return (
        <BasketCardStyled onClick={onCardClick} isAdminMode={isAdminMode} isSelected={isSelected}>
            <div className="cardImage">
                <img src={imageSource} alt={title} />
            </div>
            <div className="cardInfos">
                <span className="title">{title}</span>
                <span className="price">{price}</span> 
            </div>
            <div className="cardExtras" onClick={onDeleteBtnClick}>
                <CasinoEffect className="quantity" count={`x ${quantity}`} />
                <MdDeleteForever className='deleteCardButton'/>
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
        padding: 8px;
        width: 38%;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .cardInfos {
        width: 42%;
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        
        span {
            margin: 2px 0;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
            display: block;
            color: ${theme.colors.white};
            font-size: ${theme.fonts.size.P3};
        }
        .deleteCardButton:active {
            color: ${theme.colors.dark};
        }
        .quantity {
            display: none;
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