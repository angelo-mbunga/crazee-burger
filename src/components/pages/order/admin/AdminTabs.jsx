import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import Tab from '../../../reusable-ui/Tab';
import React, { useState } from 'react';

export default function AdminTabs({isCollasped, setIsCollasped}) {

  const [panelIcon, setPanelIcon] = useState(true);

  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isSettingsSelected, setIsSettingsSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);

  function togglePanelIcon() {
    if (panelIcon) {
        setPanelIcon(false)
        setIsCollasped(false)
    }
    setPanelIcon(!panelIcon)
    setIsCollasped(!isCollasped)
  }

  function selectAddTab() {
    setIsCollasped(!isCollasped)
    setIsEditSelected(false);
    setIsAddSelected(!isAddSelected);
    setIsSettingsSelected(false);
  }

  function selectEditTab() {
    setIsCollasped(!isCollasped)
    setIsEditSelected(!isEditSelected);
    setIsAddSelected(false);
    setIsSettingsSelected(false);
  }

  function selectSettingsTab() {
    setIsCollasped(!isCollasped)
    setIsEditSelected(false);
    setIsAddSelected(false);
    setIsSettingsSelected(!isSettingsSelected);
  }

  return (
    <AdminTabsStyled> 
        {panelIcon
          ? <Tab value={''} icon={<FiChevronUp/>} className={isCollasped ? 'tab tab-actived' : 'tab'} onClick={togglePanelIcon}/>
          : <Tab value={''} icon={<FiChevronDown/>} className={isCollasped ? 'tab tab-actived' : 'tab'} onClick={togglePanelIcon}/>
        }
        <Tab value={'Ajouter un produit'} icon={<IoIosAdd/>} className={isAddSelected ? 'tab tab-actived' : 'tab'} onClick={selectAddTab}/>
        <Tab value={'Modifier un produit'} icon={<MdOutlineEdit/>} className={isEditSelected ? 'tab tab-actived' : 'tab'} onClick={selectEditTab}/>
        <Tab value={'Paramatres'} icon={<IoSettingsOutline/>} className={isSettingsSelected ? 'tab tab-actived' : 'tab'} onClick={selectSettingsTab}/>
    </AdminTabsStyled> 
  )
}
const AdminTabsStyled = styled.nav`
  height: 40px;
  list-style: none;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin-left: 40px;

  .tab {
    background-color: white;
    outline: 1px solid lightgray;
    outline-offset: -1px;
    height: 100%;
    display: flex;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    margin-left: 1px;
  }
  .tab:hover {
    cursor: pointer;
    text-decoration: underline;
    transition: 0.5s;
  }
  .tab:first-child {
    p {
        display: none;
    }
  }
  .tab-actived {
    background-color: #292729;
    color: white;
    transition: 0.5s;
  }
`;
