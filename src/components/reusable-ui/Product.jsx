import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Product() {

    return (
        <ProductStyled/>
    )
}

const ProductStyled = styled.div`
    .card {
        background: #F5F5F7;
        min-width: auto;
        max-width: 240px;
        min-height: auto;
        max-height: 330px;
        padding: 20px;
        box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
        border-radius: 15px;
    }
    
    .card-img {
        width: 200px;
        height: 140px;
    }

    .card-info {
        width: 100%;
    }
    .item-title {
        text-align: center;
    }
    .item-price {
        color: ${theme.colors.primary};
        width: 50%;
        padding: 16px 0;
    }
    .card-extra {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
    }
    .card-cta {
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: none;
        padding: 16px 24px;
        font-size: ${theme.fonts.size.P0};
        text-overflow: ellipsis;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        margin: auto;
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

