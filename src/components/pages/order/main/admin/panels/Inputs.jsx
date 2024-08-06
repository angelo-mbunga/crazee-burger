import React from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../../../reusable-ui/TextInput';
import SelectInput from '../../../../../reusable-ui/SelectInput';
import { textInputsConfig, selectInputsConfig } from './inputsConfig';
import { IMAGE_DEFAULT_PRODUCT } from '../../../../../../enums/product';
import { theme } from '../../../../../../theme';

export const Inputs = React.forwardRef(({product, onChange, onBlur, onFocus }, ref) => {

    const textInputs = textInputsConfig(product)
    const selectInputs = selectInputsConfig(product)

    return (
        <InputsStyled>
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
        </InputsStyled>
    )
});
const InputsStyled = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);

    div {
        width: 100%;
    }
    div:first-child {
        grid-area: 1/1/2/7;
    }
    div:nth-child(2){
        grid-area: 2/1/3/7;
    }
    div:nth-child(3){
        grid-area: 3/1/4/4!important;  
    }
    .input-price {
        width: 45%;
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
    select {
        background-color: ${theme.colors.background_white};
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: none;
        font-size: ${theme.fonts.size.P0};
        outline: 0;
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
`;
