import React from 'react';
import styled from 'styled-components';
import {theme} from '../../theme/index'
import PrimaryButton from './PrimaryButton';
import { truncate } from '../../utils/maths';

export default function Card({title, imageSource, id, leftDescription}) {
    return (
        <CardStyled>
            <div className='card'>
                <img src={imageSource} alt={title} className='card-img'/>  
                <div className='card-details'>
                    <p className='card-title'>{truncate(title, 18)}</p>
                    <div className='card-extra'>
                        <div className='card-left-extra'>
                            <p className=''>{leftDescription}</p>
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
        background: #F5F5F7;
        min-width: auto;
        max-width: 240px;
        height: max-content;
        padding: 20px;
        box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
        border-radius: 15px;
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
        font-size: 32px;
        font-weight: 600;
        margin-block-start: 0;
        margin-block-end: 0;
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
        float: right;
        margin: none;
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
`;

