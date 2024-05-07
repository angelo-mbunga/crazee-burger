import React from 'react'
import { theme } from '../../../../../../theme';
import styled from 'styled-components';

export default function ProductPreview(product) {

    return (
        <ProductPreviewStyled>
            { product.product.imageSource
                ? <img src={product.product.imageSource} alt={product.product.title} />
                : <span className='emptyImageMsg'>Pas d'image</span>
            }
        </ProductPreviewStyled> 
    )
}
const ProductPreviewStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    height: 80%;
    border: 1px solid ${theme.colors.greyLight};

    .emptyImageMsg {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.size.P3};
        font-family: "Amatic SC", cursive;
    }
    img {
        border-radius: ${theme.borderRadius.round};
        width: 66%;
        height: 13em;
        max-height: 80%;
        margin: auto;
        object-fit: contain;
        object-position: center;
    }
`;