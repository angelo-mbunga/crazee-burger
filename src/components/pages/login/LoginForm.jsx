import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../../theme';
import TextInput from '../../reusable-ui/TextInput';
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from '../../reusable-ui/PrimaryButton';


export default function  () {
  //
  const [ inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  // 
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`order/${inputValue}`);
    setInputValue('');
  }
  // 
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h2>Bienvenue chez vous !</h2>
          <hr />
          <h2>Connectez-vous</h2>
          <TextInput value={inputValue} onChange={handleChange} placeholder={"Entrez votre prénom"} Icon={<BsPersonCircle className="inputIcon"/>} required/>
          <PrimaryButton label={"Acceder à mon espace"}/>
        </div>
      </LoginFormStyled>
    </>
  )
}

const LoginFormStyled = styled.form `
  width: 33%;

  h2 {
    color: ${theme.colors.white};
    font-family: "Amatic SC", cursive;
    font-size: 36px;
  }
  hr{
    border: 1px solid ${theme.colors.primary_burger};
    margin: -12px 0;
  }






`
