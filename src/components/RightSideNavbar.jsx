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
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  color: ${theme.colors.greyDark};
  height: 100%;
  font-family: "Open Sans", sans-serif;

  .admin-button {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`