import styled from 'styled-components';
import { theme } from '../../theme';
import React from 'react';

export default function SelectInput({ options, value, className, name, id, onChange, onFocus, onBlur }) {
    return (
        <SelectInputStyled >
            <select value={value} name={name} className={className} id={id} onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
                {options.map((option) => (
                    <option key={option.label} value={option.value}>{option.label}</option>
                ))}
            </select>
        </SelectInputStyled>
  )
}
const SelectInputStyled = styled.div`
  
`;
