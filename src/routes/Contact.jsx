import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div>
            <h1>pagina de contato</h1>
            <p>
                <Link to="/contact/1"> forma de contato 1</Link>
                <Link to="/contact/2"> forma de contato 2</Link>
                <Link to="/contact/3"> forma de contato 3</Link>
            </p>

        </div>
    )
}

export default Contact