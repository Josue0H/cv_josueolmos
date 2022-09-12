import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'

export const Contact = ({
    id
}) => {
  return (
    <div className='container contact-container p-5' id={id}>
        <h1>Contact</h1>
        <div className='col m-3'>
            <AiOutlineMail size={35}/><span> olmos.josue00@gmail.com</span>
        </div>
        <div className='col m-3'>
            <AiOutlinePhone size={35}/><span> +52 395 119 07 26</span>
        </div>
        <div className='col m-3'>
            <ImLocation size={35}/><span> México</span>
        </div>
    </div>
  )
}
