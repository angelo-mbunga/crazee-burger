import styled from 'styled-components';
import { theme } from '../../theme'
import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom'

export default function RightSideNavbar() {

  const {username} = useParams();

    return (
      <RightSideNavbarStyled>
        <div>
          <h3>Hey, <span>{username}</span></h3>
          <Link to="/"><a>Se déconnecter</a></Link>
        </div>
        <BsPersonCircle className="NavbarIcon"/>
      </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    width: 50%;
    padding-right: 70px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;

    .NavbarIcon{
      width: 36px;
      height: 36px;
      color: grey;
      position: relative;
    }
    span {
      color: orange;
      text-transform: uppercase;
    }
    a, a:active {
      text-decoration: none;
      color: grey;
    }
    a:hover {
      text-decoration: underline;
    }

`