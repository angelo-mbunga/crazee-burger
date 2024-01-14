import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


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
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez vous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input type="text" value={inputValue} name="inputValue" placeholder='Entrez votre prénom...' onChange={handleChange} required/>
        <button>
        Accéder à votre espace
        </button>
      </form>
    </>

  )
}
