import React from 'react'
import { getTextInputs } from './getTextInputs';
import { TextInput } from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import ProductPreview from './ProductPreview';
import { defaultImage } from '../../../../../../enums/product';
import { getSelectInputs } from './getSelectInputs';
import SelectInput from '../../../../../reusable-ui/SelectInput';

const ProductForm = React.forwardRef(({onSubmit, onChange, onFocus, onBlur, product, formFooterContent, formFooterClass}, ref) => {

    const textInputs = getTextInputs(product)
    const selectInputs = getSelectInputs(product)

    const isAvailableOptions = [
        {value : true, label : "En stock"},
        {value : false, label : "En ruptire"}
    ]
    const isAdvertisedOptions = [
        {value : true, label : "Avec pub"},
        {value : false, label : "Avec pub"}
    ]
    
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
{/*                 {selectInputs.map((select) => (
                    <SelectInput
                        key={select.id}
                        name={select.id}
                    />
                ))}  */} 
                        <select name="isAvailable" className='is-available-select' >
                            {isAvailableOptions.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                         <select name="isAdvertised" className='is-advertised-select'>
                            {isAdvertisedOptions.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
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
    grid-template-columns: 33% 65%;
    grid-gap: 8px;
    padding: 24px;
    height: 100%;

    form {
        display: grid;
        grid-template-rows: repeat(4, 50px);
        grid-template-columns: repeat(3, 1fr);
        
        div {
            float: left;
            margin-left: 8px;
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
            width: 100%;
        }
        .is-available-select{
            grid-area: 3/2/3/3;
            width: 100%;
            border: 1px solid black;
            z-index: 23;
        }
        .is-advertised-select{
            grid-area: 4/3/3/5;
            width: 100%;
            background-color: ${theme.colors.background_white};
        }
        div:last-child{
            grid-area: 5/1/4/5;
        }

    }
    input {
        padding: 10px 12px;
        padding-left: 64px;
        background-color: ${theme.colors.background_white};
        height: 16px;
        width: 66%;
    }
    select {
        padding: 10px;
        background-color: ${theme.colors.background_white};
        height: 16px;
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: none;
        font-size: ${theme.fonts.size.P0};
    }
    .inputIcon {
        height: 16px;
        width: 16px;
        margin-top: -3px;
    }

    .formFooterBtn {
        width: 100%; 
        padding: 10px;
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
        border: none;
        cursor: pointer;
    }
    .formFooterBtn:hover {
        background-color: ${theme.colors.green};
    } 
`
