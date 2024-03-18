import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig } from './getTabsConfig';


export default function AdminPanel() {

  const {currentTabSelected} = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);

  return (
    <AdminPanelStyled>
        {currentTabSelected === 'add' && 'Ajouter un produit'}
        {currentTabSelected === 'edit' && 'Modifier un produit'}
        {currentTabSelected === 'settings' && 'Parametres'}
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  background-color: white;
  height: 200px;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
`;
