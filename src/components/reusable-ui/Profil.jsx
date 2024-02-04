import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";

export default function Profil() {
    const {username} = useParams();

    return (
        <ProfilStyled>
            <div>
                <p>Hey, <span>{username}</span></p>
                <Link to="/"><a>Se déconnecter</a></Link>
            </div>
            <BsPersonCircle className="NavbarIcon"/>    
        </ProfilStyled>
    )
}
const ProfilStyled = styled.div`
    width: 50%;
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: purple;

    p {
        margin-block-end: 0;
        margin-block-start: 0;
        text-align: right;
        padding: 2px 0;
    }

    .NavbarIcon{
      width: 24px;
      height: 24px;
      padding-left: 16px;
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
`;