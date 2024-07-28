import styled from 'styled-components';
import { theme } from '../../theme';
import React from 'react';

export default function SelectInput(name, value, label) {
    return (
        <SelectInputStyled id={name}>
            <select name={name}>
                <option value={value}>{label}</option>
            </select>
        </SelectInputStyled>
  )
}
const SelectInputStyled = styled.div`
  
`;
