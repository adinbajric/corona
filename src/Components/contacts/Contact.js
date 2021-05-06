import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contacts'>
            <h5 className='title__small contacts__title--small'>Request for a Contact</h5>
            <p className='contacts__info'>If you have mild Corona symptoms, call your doctor.<br />
            To reduce transmission of the virus, call us!</p>
            <div className='contacts__container'>
                <div className='phone'>
                    <p className='contact__text'>Phone Number</p>
                    <h3 className='contact__number'>+1 797 735 3618</h3>
                </div>
                <div className='email'>
                    <p className='contact__text'>E-mail</p> 
                    <h3 className='contact__email'>hello@cowork.space</h3> 
                </div>
            </div>
        </div>
    )
}

export default Contact
