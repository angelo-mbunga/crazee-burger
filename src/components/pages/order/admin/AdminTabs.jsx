import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import Tab from '../../../reusable-ui/Tab';
import { useState } from 'react';

export default function AdminTabs() {

    const [panelIcon, setPanelIcon] = useState(true);
    const [isPanelUp, setPanelUp] = useState(true);

    function togglePanelIcon() {
        if (panelIcon) {
            setPanelIcon(false)
            setPanelUp(false)
        }
        setPanelIcon(!panelIcon)
        setPanelUp(!isPanelUp)
    }
    console.log(panelIcon)

    return (
        <AdminTabsStyled> 
            {panelIcon
                ? <Tab value={''}  icon={<FiChevronDown/>} className={'tab'} onClick={togglePanelIcon}/>
                : <Tab value={'rr'} icon={<FiChevronUp/>} className={'tab'} onClick={togglePanelIcon}/>
            }
            <Tab value={'Ajouter un produit'} icon={<IoIosAdd/>} className={'tab'}/>
            <Tab value={'Modifier un produit'} icon={<MdOutlineEdit/>} className={'tab'} />
            <Tab value={'Paramatres'} icon={<IoSettingsOutline/>} className={'tab'}/>
        </AdminTabsStyled> 
    )
}
const AdminTabsStyled = styled.nav`
  height: 36px;
  list-style: none;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;

  .tab {
    background-color: white;
    outline: 1px solid lightgray;
    outline-offset: -1px;
    height: 100%;
    display: flex;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
  }
  .tab:hover {
    cursor: pointer;
    text-decoration: underline;
    transition: 0.5s;
  }
  .activeTab {
    background-color: black;
    color: white;
  }

  .tab:first-child {
    p {
        display: none;
    }
  }
`;
