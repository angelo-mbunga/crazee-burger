import styled from 'styled-components';
import logo from "../../assets/img/logo-orange.png"
import { theme } from '../../theme'

export default function Logo() {
  return (
    <LogoStyled>
        <h1>crazee</h1>
        <img src={logo} alt="Logo" />
        <h1>burger</h1>
    </LogoStyled>
  )
}
const LogoStyled = styled.div `
  display: flex;
  align-items: center;

  h1 {
    color: ${theme.colors.primary_burger};
    display: inline;
    text-align: center;
    font-size: 80px;
    line-height: 1em;
    font-weight: ${theme.fonts.weights.heavy};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 80px;
    width: 100px;
    margin: 0 ${theme.gridUnit}px;
  }
`