import styled from 'styled-components';
import Logo from "../../../reusable-ui/Logo";
import { Link } from 'react-router-dom'
import { refreshPage } from '../../../../utils/windows';

export default function LeftSideNavbar() {
    return (
      <LeftSideNavbarStyled>
        <LinkStyled><Logo onClick={refreshPage}/></LinkStyled>
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

