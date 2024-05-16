import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { theme } from '../../../../theme/index'

export default function Profil() {
    const {username} = useParams();

    return (
        <ProfilStyled>
            <div>
                <p>Hey, <span>{username}</span></p>
                <Link to="/">Se déconnecter</Link>
            </div>
            <BsPersonCircle className="ProfilIcon"/>    
        </ProfilStyled>
    )
}
const ProfilStyled = styled.div`
    width: auto;
    padding: 0 8px;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: ${theme.fonts.size.XS};

    p {
        margin-block-end: 0;
        margin-block-start: 0;
        text-align: right;
        padding: 2px 0;
    }
    .ProfilIcon{
      width: 36px;
      height: 36px;
      padding-left: 16px;
    }
    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.semiBold};
      text-transform: uppercase;
    }
    a {
      text-decoration: none;
      color: ${theme.colors.greySemiDark};
    }
    a:hover {
      text-decoration: underline;
    }
`;