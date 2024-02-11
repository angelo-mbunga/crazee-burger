import styled from 'styled-components';
import logo from "../../assets/img/logo-orange.png"
import { theme } from '../../theme'

export default function Logo({className, onClick}) {
  return (
    <LogoStyled>
        <h1 className='text-logo-login-page'>crazee</h1>
        <img src={logo} alt="Logo" className='img-logo-login-page' onClick={onClick}/>
        <h1 className='text-logo-login-page'>burger</h1>
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
    font-size: 30px;
    line-height: 1em;
    font-weight: ${theme.fonts.weights.heavy};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 60px;
    margin: 0 ${theme.gridUnit}px;
  }
`