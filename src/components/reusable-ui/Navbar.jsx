import styled from 'styled-components';
import { theme } from '../../theme'
import LeftSideNavbar from '../LeftSideNavbar';
import RightSideNavbar from '../RightSideNavbar';

export default function Navbar() {
    return (
      <NavbarStyled>
        <LeftSideNavbar/>
        <RightSideNavbar/>
      </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
    background-color: ${theme.colors.white};
`