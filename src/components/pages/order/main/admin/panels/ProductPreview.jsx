import React from 'react'
import { theme } from '../../../../../../theme';
import styled from 'styled-components';

export default function ProductPreview(product) {

    return (
        <ProductPreviewStyled>
            { product.product.imageSource
                ? <img src={product.product.imageSource} alt={product.product.title} />
                : <span className='emptyImageMsg'>Pas d'image...</span>
            }
        </ProductPreviewStyled> 
    )
}
const ProductPreviewStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100%;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};

    .emptyImageMsg {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.size.P2};
        font-family: "Amatic SC", cursive;
        color: ${theme.colors.greyMedium};
    }
    img {
        border-radius: ${theme.borderRadius.round};
        width: 80%;
        max-height: 7rem;
        margin: auto;
        object-fit: contain;
        object-position: center;
    }
`;