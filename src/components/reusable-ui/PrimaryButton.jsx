import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({label}) {
  return (
    <PrimaryButtonStyled>
        <button>{label}</button>
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled = styled.div `
    display: flex;
    position: relative;
    margin: 12px auto;
    width: 66%;

    button {
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: none;
        padding: 16px;
        font-size: ${theme.fonts.size.P0};
        text-overflow: ellipsis;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }
    button:hover {
        cursor: pointer;
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        outline: 2px solid ${theme.colors.primary};
        outline-offset: -2px;
    }
`