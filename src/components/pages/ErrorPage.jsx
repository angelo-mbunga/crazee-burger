import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        <h1>ERREUR</h1>
        <button>
          <Link to="/">Retour à l'acceuil</Link>
        </button>
    </div>
  )
}
