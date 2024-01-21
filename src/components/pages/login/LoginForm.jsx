import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../../theme';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";


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
          <div className='wrapper'>
            <div className='inputIcon'><BsPersonCircle /></div>
            <input type="text" value={inputValue} name="inputValue" placeholder='Entrez votre prénom' onChange={handleChange} className='input' required/>
          </div>
          <div className='wrapper'>
            <button className='button'>Accéder à mon espace</button>
            <div className='buttonIcon'><MdKeyboardDoubleArrowRight /></div>
          </div>
        </div>
      </LoginFormStyled>
    </>
  )
}

const LoginFormStyled = styled.form `
  h2 {
    color: ${theme.colors.white};
    font-family: "Amatic SC", cursive;
    font-size: 36px;
  }
  hr{
    border: 1px solid ${theme.colors.primary_burger};
    margin: -12px 0;
  }
  .wrapper {
    display: flex;
    position: relative;
    margin: 12px 0;
  }
  .input {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 16px;
    padding-left: 48px;
    font-size: 16px;
    text-overflow: ellipsis;
    background-color: ${theme.colors.white};
  }
  .button {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 16px;
    padding-right: 48px;
    font-size: 16px;
    text-overflow: ellipsis;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
  .button:hover {
    cursor:pointer;
  }
  .inputIcon,.buttonIcon {
    position: absolute;
    top: 16px;
    width: 24px;
    height: 24px;
  }
  .buttonIcon {
    right: 12px;
    color: ${theme.colors.white};
  }
  .inputIcon{
    left: 12px;
    color: ${theme.colors.greyLight};
  }


`
