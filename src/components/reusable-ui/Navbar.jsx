import styled from 'styled-components';
import { theme } from '../../theme'
import LeftSideNavbar from './LeftSideNavbar';
import RightSideNavbar from './RightSideNavbar';

export default function Navbar() {
    return (
      <NavbarStyled>
        <LeftSideNavbar/>
        <RightSideNavbar/>
      </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    background-color: red;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`