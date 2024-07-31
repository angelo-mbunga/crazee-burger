import styled from 'styled-components';
import { theme } from '../../theme';
import React from 'react';

export default function SelectInput({ options, className, name, id }) {
    return (
        <SelectInputStyled >
            <select name={name} className={className} id={id}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </SelectInputStyled>
  )
}
const SelectInputStyled = styled.div`
  
`;
