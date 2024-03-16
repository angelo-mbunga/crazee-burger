import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import Tab from '../../../../reusable-ui/Tab';
import React, { useContext, useState } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {

  const {
    isAddSelected, setIsAddSelected,
    isCollasped, setIsCollasped,
    isEditSelected, setIsEditSelected,
    isSettingsSelected, setIsSettingsSelected} = useContext(OrderContext);

  const [panelIcon, setPanelIcon] = useState(true);

  function togglePanelIcon() {
    setPanelIcon(!panelIcon)
    setIsCollasped(!isCollasped)
  }

  function selectTab(selectedTab) {
    setIsCollasped(true)
    if (selectedTab === "add") {
      setIsEditSelected(false);
      setIsAddSelected(true);
      setIsSettingsSelected(false);
    }
    if (selectedTab === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
      setIsSettingsSelected(false);
    }
    if (selectedTab === "settings") {
      setIsEditSelected(false);
      setIsAddSelected(false);
      setIsSettingsSelected(true);
    }
  }

  const tabsConfig = [
    {
      value : "",
      icon: isCollasped ? <FiChevronUp/> : <FiChevronDown/>,
      className: isCollasped ? 'tab tab-actived' : 'tab',
      onClick: togglePanelIcon,
    },
    {
      value : "Ajouter un produit",
      icon: <IoIosAdd/>,
      className: isAddSelected ? 'tab tab-actived' : 'tab',
      onClick: () => selectTab("add"),
    },
    {
      value : "Modifier un produit",
      icon: <MdOutlineEdit/>,
      className: isEditSelected ? 'tab tab-actived' : 'tab',
      onClick: () => selectTab("edit"),
    },
    {
      value : "Paramatres",
      icon: <IoSettingsOutline/>,
      className: isSettingsSelected ? 'tab tab-actived' : 'tab',
      onClick: () => selectTab("settings"),
    },
  ]; 
  return (
    <AdminTabsStyled> 
      {tabsConfig.map((tab) => {
        return (
          <Tab value={tab.value} icon={tab.icon} className={tab.className} onClick={tab.onClick}/>
        )
      })}
    </AdminTabsStyled> 
  )
}
const AdminTabsStyled = styled.nav`
  height: 40px;
  list-style: none;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  justify-content: center;

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
