import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
  return (
    <div className="Header">
      <img className="Logo" src="/images/TeraIplLogo.png" alt="Tera IPL"></img>
      <div className="Home">
        <Link className="headerLink" to="/">
          <p className="text">Home</p>
        </Link>
        <Link className="headerLink" to="/aboutus">
          <p className="text">About Us</p>
        </Link>
      </div>
    </div>
  )
}
