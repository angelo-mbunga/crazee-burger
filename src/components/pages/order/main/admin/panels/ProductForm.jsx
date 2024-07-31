import React from 'react'
import { selectInputsConfig, textInputsConfig } from './inputsConfig';
import { TextInput } from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import ProductPreview from './ProductPreview';
import { defaultImage } from '../../../../../../enums/product';
import SelectInput from '../../../../../reusable-ui/SelectInput';

const ProductForm = React.forwardRef(({onSubmit, onChange, onFocus, onBlur, product, formFooterContent, formFooterClass}, ref) => {

    const textInputs = textInputsConfig(product)
    const selectInputs = selectInputsConfig(product)

    return (
        <ProductFormStyled>
            <ProductPreview product={product} />
            <form onSubmit={onSubmit} onChange={onChange}>
                {textInputs.map((input) => (
                    <TextInput 
                        key={input.id}
                        name={input.name}
                        value={input.value === defaultImage ? input.value = '' : input.value }
                        onChange={onChange}
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
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        //Icon={input.Icon}
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
        grid-template-columns: repeat(3, 1fr);
        
        div {
            float: left;
            height: 100%;
            width: 100%;
        }
        div:first-child {
            grid-area: 1/1/2/5;
           
        }
        div:nth-child(2){
            grid-area: 2/1/3/5;
        }
        div:nth-child(3){
            grid-area: 3/1/3/2;
            width: 66%!important;
        }
        .input-price {
            width: 66%;
        }
        .is-available-select{
            grid-area: 3/2/3/3;
            width: 95%;
            z-index: 23;
        }
        .is-advertised-select{
            grid-area: 4/3/3/5;
            width: 95%;
            float: right;
            background-color: ${theme.colors.background_white};
        }
        div:last-child{
            grid-area: 5/1/4/5;
        }
        select {
            background-color: ${theme.colors.background_white};
            height: 36px;
            width: 100%;
            border-radius: ${theme.borderRadius.round};
            border: none;
            font-size: ${theme.fonts.size.P0};
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
        width: 66%; 
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
