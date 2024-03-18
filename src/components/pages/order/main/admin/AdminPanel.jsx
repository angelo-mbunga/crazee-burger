import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig, getTabSelected } from './getTabsConfig';


export default function AdminPanel() {

  const {currentTabSelected} = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>{currentTabSelected === tabSelected.index && tabSelected.value}</AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  background-color: white;
  height: 200px;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
`;
