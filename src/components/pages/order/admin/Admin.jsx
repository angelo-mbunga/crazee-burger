import React from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';

export default function Admin() {

  return (
    <AdminStyled>
      <AdminTabs/>
      <AdminPanel/>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  height: 200px;
  width: 100%;
  background-color: transparent;
`;
