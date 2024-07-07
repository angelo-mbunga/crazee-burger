import React from 'react'
import styled from 'styled-components';
import PrimaryButton from '../../../../reusable-ui/PrimaryButton';
import { theme } from '../../../../../theme';

export default function MenuEmpty({text1, text2, btnLabel, btnClassName, onClick}) {

    return (
        <MenuEmptySyled>
            <h1>{text1}</h1>
            <h2>{text2}</h2>
                { btnLabel
                    ? <PrimaryButton label={btnLabel} className={btnClassName} onClick={onClick}/>
                    : null
                }
        </MenuEmptySyled>
    )
}
const MenuEmptySyled = styled.div`
    text-align: center;
    padding: 8px 16px;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P1};
    width: 100%;

    h1{
        color: ${theme.colors.greyDark};  
    }
    h2{
        color: ${theme.colors.greySemiDark}; 
    }
`;
