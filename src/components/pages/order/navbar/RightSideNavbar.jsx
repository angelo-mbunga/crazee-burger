import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme'
import Profil from '../../../reusable-ui/Profil';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import NavbarRightSideIncomplet from './NavbarRightSideIncomplet';
import { toast, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { MdAdminPanelSettings } from "react-icons/md";

export default function RightSideNavbar() {

  const [isAdminMode, setIsAdminMode] = useState(true);

  const displayToast = () => {
    if (isAdminMode) {
      toast.info("Mode admin activé", {
        icon: <MdAdminPanelSettings size={30} />,
        theme: 'dark',
        transition: Zoom,
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }) 
    }
    setIsAdminMode(!isAdminMode)
  };

  return (
    <RightSideNavbarStyled>
      <ToggleButton 
        isChecked={isAdminMode}
        labelIfChecked='Activer mode admin'
        labelIfUnchecked='Desactiver mode admin'
        onToggle={displayToast}/>
      <Profil/>
      <NavbarRightSideIncomplet/>
    </RightSideNavbarStyled>
  )
}

const RightSideNavbarStyled = styled.div`
  width: 50%;
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