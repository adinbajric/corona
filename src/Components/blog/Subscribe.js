import React from 'react';
import Conspiracy from './Conspiracy';
import './Subscribe.css';


function Subscribe() {
    return (
        <div className='subscribe'>
            <h1 className='title__big subscribe__title'>Subscribe to Our Newsletter</h1>
               <form className='subscribe__form'>
                    <label htmlFor='subscribe__email' className='subscribe__label'>
                        <input 
                            type='email'
                            placeholder='Your e-mail adress'
                            id='subscribe__email'
                            className='form__input subscribe__email'
                        />
                    </label>
                    <button className='btn btn__subscribe'>Subscribe</button>                    
                </form>            
            <p className='subscribe__note'>We promise we do not spam. Only our articles from the blog!</p>
            <Conspiracy/>
        </div>
    )
}

export default Subscribe
