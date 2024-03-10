import React, { useState } from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';

export default function Admin() {

  const [isCollasped, setIsCollasped] = useState(false);

  return (
    <AdminStyled>
      <AdminTabs isCollasped={isCollasped} setIsCollasped={setIsCollasped}/>
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
