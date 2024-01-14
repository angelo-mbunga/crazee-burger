import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {

  const {username} = useParams();
  
  return (
    <div>
      <h1>Bonjour {username}</h1>
        <button>
          <Link to="/">déconnexion</Link>
        </button>
    </div>
  )
}
