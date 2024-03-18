import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig, getTabSelected } from './getTabsConfig';
import {theme} from '../../../../../theme/index';;


export default function AdminPanel() {

  const {currentTabSelected} = useContext(OrderContext);

  const tabs = getTabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>{tabSelected.value}</AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  background-color: ${theme.colors.background_white};
  height: 200px;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
`;
