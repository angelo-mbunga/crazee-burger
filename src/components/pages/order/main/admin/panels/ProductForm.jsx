import React from 'react'
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import ProductPreview from './ProductPreview';
import { Inputs } from './Inputs';

const ProductForm = React.forwardRef(({onSubmit, onChange, onFocus, onBlur, product, formFooterContent, formFooterClass}, ref) => {
    return (
        <ProductFormStyled onSubmit={onSubmit} >
            <ProductPreview product={product} />
            <Inputs product={product} onBlur={onBlur} onChange={onChange} onFocus={onFocus} />
            <PrimaryButton label={formFooterContent} className={formFooterClass} /> 
        </ProductFormStyled>
    )
})
export default ProductForm;

const ProductFormStyled = styled.form`
    display: grid;
    margin: auto;
    grid-template-columns: 30% 60%;
    grid-gap: 16px;
    grid-row-gap: 0;
    padding: 24px;
    height: 100%;

    div:nth-child(3){
        grid-area: 2/2/3/3;  
        width: 60%;
        margin: 0!important;
        height: 50%;
    }
`
