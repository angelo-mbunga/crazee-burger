import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../../reusable-ui/Navbar';
import OrderPageMain from './OrderPageMain';

export default function OrderPage() {

  const {username} = useParams();
  
  return (
    <OrderPageStyled>
      {/* <h1>Bonjour {username}</h1>           <Link to="/">Se déconnecter</Link> */}
      <Navbar/>
      <OrderPageMain/>
    </OrderPageStyled>
  )
}
const OrderPageStyled = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;

  ::before {
    content: "";
      background-color: #FF9F1A;
      background-position: center;
      background-size: cover;
      position: absolute;
      width: 100%;
      max-width: 1400px;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
  }
`
