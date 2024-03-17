import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import Tab from '../../../../reusable-ui/Tab';
import React, { useContext, useState } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import {getTabsConfig} from "../admin/getTabsConfig";

export default function AdminTabs() {

  const {
    isCollasped, setIsCollasped,
    currentTabSelected, setCurrentTabSelected,} = useContext(OrderContext);

  const [panelIcon, setPanelIcon] = useState(true);

  function togglePanelIcon() { 
    setPanelIcon(!panelIcon)
    setIsCollasped(!isCollasped)
  }

  function selectTab(selectedTab) {
    setIsCollasped(true)
    setCurrentTabSelected(selectedTab)
  }

  const tabs = getTabsConfig(currentTabSelected);

  return (
    <AdminTabsStyled> 
      <Tab value={""} icon={isCollasped ? <FiChevronUp/> : <FiChevronDown/>} className={isCollasped ? 'tab tab-actived' : 'tab'} onClick={togglePanelIcon}/>
        {tabs.map((tab) => 
          <Tab value={tab.value} icon={tab.icon} className={tab.className} onClick={() => selectTab(tab.index)}/>
        )}
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
