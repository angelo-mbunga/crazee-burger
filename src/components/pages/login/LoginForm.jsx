import React from 'react'
import { useState } from 'react'

export default function  () {
    // ETAT
    const [ inputValue, setInputValue] = useState('');

    // COMPORTEMENT
    const handleChange = (event) => {
    setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    alert("Bonjour " + event.target[0].value);
    setInputValue("");
}

  // RENDU
  return (
    <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez vous</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input type="text" value={inputValue} name="inputValue" placeholder='Entrez votre prénom...' onChange={handleChange} required/>
        <button>Accéder à votre espace</button>
    </form>
  )
}
