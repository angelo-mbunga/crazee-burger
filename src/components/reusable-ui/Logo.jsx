import styled from 'styled-components';
//import Logo from "../assets/img/F03 logo-orange.png"
import { theme } from '../../theme'


export default function Logo() {
  return (
    <LogoStyled>
        <h1>Logo</h1>
    </LogoStyled>
  )
}
const LogoStyled = styled.div `
  color: ${theme.colors.primary_burger};
  background-color: lightgreen;
`