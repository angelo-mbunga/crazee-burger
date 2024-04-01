import React, { useContext } from 'react';
import styled from 'styled-components';
import {theme} from '../../theme/index'
import PrimaryButton from './PrimaryButton';
import { truncate, formatPrice } from '../../utils/maths';
import { TiDelete } from "react-icons/ti";
import OrderContext from '../../context/OrderContext';

export default function Card({title, imageSource, id, leftDescription, onCloseBtnClick}) {

    const {isAdminMode} = useContext(OrderContext)

    return (
        <CardStyled>
            <div className='card'>
                {isAdminMode
                ? null
                : <div className='card-delete-btn'><TiDelete className='delete-icon' onClick={onCloseBtnClick}/></div>
                }
                <img src={imageSource} alt={title} className='card-img'/>  
                <div className='card-details'>
                    <p className='card-title'>{truncate(title, 18)}</p>
                    <div className='card-extra'>
                        <div className='card-left-extra'>
                            <p className=''>{formatPrice(leftDescription)}</p>
                        </div>
                        <div className='card-right-extra'>
                            <PrimaryButton className={"card-cta"} label={"Ajouter"}></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    .card {
        background: ${theme.colors.background_white};
        min-width: auto;
        max-width: 240px;
        height: max-content;
        padding: 20px;
        box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
        border-radius: ${theme.borderRadius.round};
    }
    .card-img {
        width: auto;
        max-width: 200px;
        height: 150px;
        display: block;
        margin: auto;
    }
    .card-details {
        width: 100%;
    }
    .card-title {
        text-align: left;
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.size.P4};;
        font-weight: ${theme.fonts.weights.bold};
        margin-block-start: 0;
        margin-block-end: 0;
        min-height: 46px;
    }
    .card-extra {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .card-left-extra {
        color: ${theme.colors.primary};
        width: 33%;
        padding: 8px 0;
    }
    .card-right-extra {
        width: 66%;
        padding: 8px 0;
        float: right;
    }
    .card-cta {
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: none;
        padding: 8px 0;
        font-size: ${theme.fonts.size.P0};
        text-overflow: ellipsis;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }
    .card-cta:hover {
        cursor: pointer;
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        outline: 2px solid ${theme.colors.primary};
        outline-offset: -2px;
        transition: 0.5s;
    }
    .card-cta:active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }
    .card-delete-btn{
        text-align: right;
    }
    .delete-icon{
        color: ${theme.colors.primary};
        transform: scale(1.5);
        padding: 2px 0;
    }
    .delete-icon:hover{
        cursor: pointer;
        color: ${theme.colors.red};
    }
`;

