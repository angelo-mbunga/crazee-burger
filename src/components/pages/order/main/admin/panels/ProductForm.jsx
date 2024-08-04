import React from 'react'
import { selectInputsConfig, textInputsConfig } from './inputsConfig';
import { TextInput } from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import ProductPreview from './ProductPreview';
import { IMAGE_DEFAULT_PRODUCT } from '../../../../../../enums/product';
import SelectInput from '../../../../../reusable-ui/SelectInput';

const ProductForm = React.forwardRef(({onSubmit, onChange, onFocus, onBlur, product, formFooterContent, formFooterClass}, ref) => {

    const textInputs = textInputsConfig(product)
    const selectInputs = selectInputsConfig(product)

    return (
        <ProductFormStyled>
            <ProductPreview product={product} />
            {/* @TODO : CREATE A FIELDS COMPONENT WITH BOTH INPUTS */}
            <form onSubmit={onSubmit} onChange={onChange}>
                {textInputs.map((input) => (
                    <TextInput 
                        key={input.id}
                        name={input.name}
                        value={input.value === IMAGE_DEFAULT_PRODUCT ? input.value = '' : input.value }
                        onChange={onChange}
                        // @TODO : FIX ONBLUR/ONFOCUS TO ONLY APPEAR WHEN REAL UPDATE HAPPEN
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder={input.placeholder}
                        Icon={input.Icon}
                        className={input.className}
                        ref={ref && input.name === 'title' ? ref : null}
                    />
                ))} 
                {selectInputs.map((input) => (
                    <SelectInput 
                        key={input.id}
                        options={input.options}
                        className={input.className}
                        value={input.value}
                        name={input.name}
                        // @TODO : FIX ONBLUR/ONFOCUS TO ONLY APPEAR WHEN REAL UPDATE HAPPEN
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        Icon={input.Icon}
                    />
                ))} 
                <PrimaryButton
                    label={formFooterContent} 
                    className={formFooterClass}
                /> 
            </form>
        </ProductFormStyled>
    )
})
export default ProductForm;

const ProductFormStyled = styled.div`
    display: grid;
    margin: auto;
    grid-template-columns: 30% 60%;
    grid-gap: 16px;
    padding: 24px;
    height: 100%;

    form {
        display: grid;
        grid-template-rows: repeat(4, 50px);
        grid-template-columns: repeat(6, 1fr);
        
        div {
            float: left;
            height: 100%;
            width: 100%;
        }
        div:first-child {
            grid-area: 1/1/2/7;
           
        }
        div:nth-child(2){
            grid-area: 2/1/3/7;
        }
        div:nth-child(3){
            grid-area: 3/1/3/3;  
        }
        .input-price {
            width: 50%;
        }
        .is-available-select{
            grid-area: 4/3/3/5;
            width: 96%;
            height: 36px;
            background-color: ${theme.colors.background_white};
        }
        .is-advertised-select{
            grid-area: 5/5/3/7;
            width: 96%;
            background-color: ${theme.colors.background_white};
            height: 36px;
        }
        div:last-child{
            grid-area: 5/-6/4/-2;
            width: 100%;
            margin: 0!important;
        }
        select {
            background-color: ${theme.colors.background_white};
            width: 100%;
            border-radius: ${theme.borderRadius.round};
            border: none;
            font-size: ${theme.fonts.size.P0};
            outline: 0;
        }
    }

    input {
        padding: 10px 12px;
        padding-left: 64px;
        background-color:  ${theme.colors.background_white};
        height: 16px;
        width: none!important;
    }

    .inputIcon {
        height: 16px;
        width: 16px;
        margin-top: -3px;
    }

    .formFooterBtn {
        width: 100%; 
        height: 100%;
        padding: 8px;
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        border: none;
        cursor: pointer;
    }
    .formFooterBtn:hover {
        background-color: ${theme.colors.green};
    } 
`
