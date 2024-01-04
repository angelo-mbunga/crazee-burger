import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {

  /*extraction de la proprieté desirée via le tableau retourner grace à la fonction*/
  const {inputValue} = useParams();
  
  return (
    <div>
      <h1>Bonjour {inputValue}</h1>
        <button>
          <Link to="/">déconnexion</Link>
        </button>
    </div>
  )
}
