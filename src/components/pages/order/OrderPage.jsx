import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../../reusable-ui/Navbar';

export default function OrderPage() {

  const {username} = useParams();
  
  return (
    <OrderPageStyled>
      {/* <h1>Bonjour {username}</h1>           <Link to="/">Se déconnecter</Link> */}
      <Navbar/>
    </OrderPageStyled>
  )
}
const OrderPageStyled = styled.div``
