import React,{useState} from 'react'
import './Contacts.css'
import Contact from '../../Components/contacts/Contact';
import Form from '../../Components/contacts/Form';
import SimpleMap from '../../Components/contacts/SimpleMap';
import PopUp from '../../Components/popup/PopUp';

function Contacts() { 
    const [hide, setHide] = useState(true);
    const showPopUp = () => {
        setHide(false);
        setTimeout(()=>{
            setHide(true)
        },3000)        
    }
    
    const closePopUp = () => {
        setHide(true);
    }

    return (
        <div>
            <div className='form__map'>
                <div className='form__all'>
                    <Contact/>
                    <Form showPopUp={showPopUp}/>
                </div>            
                <SimpleMap/>   
            </div>
            <PopUp closePopUp={closePopUp} hide={hide} popUpText='We have received your message. Our managers will review it and contact you as soon as possible.'/>  
        </div>
        
    )
}

export default Contacts;






