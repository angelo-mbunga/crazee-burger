import styled from 'styled-components';
import { theme } from '../../theme';
import React from 'react';

export default function SelectInput({ options, value, className, name, id, onChange, onFocus, onBlur, Icon }) {
    return (
        <SelectInputStyled className={className}>
            {Icon && <div className='input-icon'>{Icon}</div>}
            <select value={value} name={name}  id={id} onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
                {options.map((option) => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </SelectInputStyled>
  )
}
const SelectInputStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.round};

    .input-icon{
        margin: auto;
        display: flex;
        color: ${theme.colors.greySemiDark};
        font-size: ${theme.fonts.size.P1};
        width: 30%;
        height: 50%;
        padding: 4px 0;
        svg {
            margin: auto;
        }
    }
`;
