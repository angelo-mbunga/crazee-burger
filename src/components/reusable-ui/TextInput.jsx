import styled from 'styled-components';
import { theme } from '../../theme';
import React from 'react';

export const TextInput = React.forwardRef(({value, onChange, Icon, ...extraProps}, ref) => {
    return (
        <InputStyled className={"input-fields"}>
            {Icon && Icon}
            <input ref={ref} value={value} onChange={onChange} type="text" {...extraProps}/>
        </InputStyled>
  )
});
const InputStyled = styled.div `
    display: grid;
    position: relative;
    width: 66%;

    input {
        border-radius: ${theme.borderRadius.round};
        border: none;
        padding: 16px;
        padding-left: 72px;
        font-size: ${theme.fonts.size.P0};
        text-overflow: ellipsis;
        background-color: ${theme.colors.white};

        &::placeholder {
            color: ${theme.colors.greyMedium};
        }
    }
    input:focus {
        outline: none;
    }
    .inputIcon {
        position: absolute;
        top: 12px;
        width: 24px;
        height: 24px;
        left: 24px;
        color: ${theme.colors.greySemiDark};
    }
  `