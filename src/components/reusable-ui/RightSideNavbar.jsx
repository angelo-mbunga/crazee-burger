import styled from 'styled-components';
import { theme } from '../../theme'

export default function RightSideNavbar() {
    return (
      <RightSideNavbarStyled>
        <h1>JUS</h1>
      </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    background-color: purple;
    width: 50%;
    padding-right: 70px;
    text-align: end;
`