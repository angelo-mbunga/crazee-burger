import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../../theme';
import { TextInput } from '../../reusable-ui/TextInput';
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { login } from '../../../api/user';

export default function  () {

  const [ username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setUsername(evt.target.value);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(username);
    setUsername('');
    navigate(`order/${username}`);
  }

  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h2>Bienvenue chez vous !</h2>
          <hr />
          <h2>Connectez-vous</h2>
          <TextInput value={username} onChange={handleChange} placeholder={"Entrez votre prénom"} Icon={<BsPersonCircle className="inputIcon"/>} required/>
          <PrimaryButton label={"Acceder à mon espace"} className={"login-page-cta"}/>
        </div>
      </LoginFormStyled>
    </>
  )
}

const LoginFormStyled = styled.form `
  width: 50%;
  max-width: 500px;
  min-width: 400px;
  padding: 0 ${theme.spacing.lg};

  h2 {
    color: ${theme.colors.white};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
  }
  hr{
    border: 1px solid ${theme.colors.primary_burger};
    margin: -16px auto;
    width: 66%;
  }
  
`
