import React from 'react'
import Close from '../../assets/Close.png';
import './PopUp.css';

function PopUp({popUpText,hide,closePopUp}) {
   
    return (
        <div className={hide ? 'popUp__hidden' :'popUp__Container'}>
            <div className='popUp'>
                <div className='popUp__titleExit'>
                    <h3 className='title__small popUp__title'>Your Message has been Sent</h3>
                    <img src={Close} onClick={closePopUp} className='popUp__exit' alt='close button'/>
                </div>          
                <h1 className='title__big title__popUp'>We'll Contact You Soon</h1>
                <p className='popUp__text'>{popUpText}</p>
                <button onClick={closePopUp} className='btn btn__popUp'>Got it</button>  
            </div>
        </div>        
    )
}

export default PopUp

