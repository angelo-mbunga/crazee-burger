import styled from 'styled-components';
import { theme } from '../../theme'

export default function LeftSideNavbar() {
    return (
      <LeftSideNavbarStyled>
        <h1>THE</h1>
      </LeftSideNavbarStyled>
    )
}

const LeftSideNavbarStyled = styled.div`
    width: 50%;
    padding-left: 20px;
`