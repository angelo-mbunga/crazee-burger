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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px 15px 0px 0px;
    background-color: white;
`