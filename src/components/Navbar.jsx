import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/home'>HOme</Link>
            <Link to='contact'> Contatos</Link>
        </nav>)
}

export default Navbar