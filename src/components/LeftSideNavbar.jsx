import styled from 'styled-components';
import { theme } from '../theme'
import Logo from "./reusable-ui/Logo";
import { Link } from 'react-router-dom'

export default function LeftSideNavbar() {
  const currentUrl = () => window.location.reload(true);
    return (
      <LeftSideNavbarStyled>
        <LinkStyled to={currentUrl}><Logo/></LinkStyled>
      </LeftSideNavbarStyled>
    )
}

const LeftSideNavbarStyled = styled.div`
  width: 66%;
  padding-left: 20px;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`
const LinkStyled = styled.div`
  text-decoration: none;
  cursor: pointer;
`

