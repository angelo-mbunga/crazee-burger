import styled from 'styled-components';
import { theme } from '../theme'
import Profil from './reusable-ui/Profil';

export default function RightSideNavbar() {
    return (
      <RightSideNavbarStyled>
        <div className='admin-button'>button Mode admin</div>
        <Profil/>
      </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    width: 33%;
    padding-right: 70px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    color: grey;
    background-color: red;
    height: 100%;

    .admin-button {
      background-color: yellow;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

`