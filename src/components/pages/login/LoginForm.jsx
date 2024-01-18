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
        <h1>Bienvenue chez vous !</h1>
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
  border: 3px solid ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  hr{
    border: 2px solid ${theme.colors.primary_burger};
  }
/*   input, button {
    width: 100%;
    height: 53px;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
  } */
  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
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
    background-color: salmon;
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
