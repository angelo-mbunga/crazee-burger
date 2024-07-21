import React, { useContext } from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import OrderContext from '../../../../../context/OrderContext';

export default function Admin() {

  const {isCollasped} = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs/>
      {isCollasped ? <AdminPanel/> : null }
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
