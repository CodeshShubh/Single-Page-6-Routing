import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <h1>Codesh</h1>
        <main>
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/#about">About</Link>
            <Link to="/#brands">Brands</Link>
            <Link to="/">Services</Link>
        </main>
    </nav>
  )
}

export default Header;