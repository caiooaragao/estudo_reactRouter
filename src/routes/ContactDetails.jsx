import React from 'react'
import { useParams } from 'react-router-dom'


const ContactDetails = () => {
    const { id } = useParams()
    return (
        <div>Exibindo os detalhes do usuario numero {id}</div>
    )
}

export default ContactDetails