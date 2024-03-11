import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminPanel() {

  const {isAddSelected, isEditSelected, isSettingsSelected} = useContext(OrderContext);

  return (
    <AdminPanelStyled>
        {isAddSelected && 'Ajouter un produit'}
        {isEditSelected && 'Modifier un produit'}
        {isSettingsSelected && 'Parametres'}
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  background-color: white;
  height: 200px;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
`;
