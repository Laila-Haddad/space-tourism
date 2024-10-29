import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='notfound-container'>
    <h1>404</h1>
    <h5>Oops! The page you are looking for does not exist.</h5>
    <Link to="/" class="home-button">Go Back Home</Link>
  </div>
  )
}

export default NotFound