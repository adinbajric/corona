import React from 'react';
import './Common.css';
import symp1 from '../../assets/symp1.png';
import symp2 from '../../assets/symp2.png';
import symp3 from '../../assets/symp3.png';
import {useHistory} from 'react-router-dom';


function Common() {
    let history = useHistory();
    const redirect = () => {
        history.push('/Contacts')
    }
    return (        
            <div className='symptoms__container'>
                <h3 className='title__small symptoms__heading--small'>Common Symptoms</h3>
                <h1 className='symptoms__heading--big title__big'>The COVID-19 virus affects <br />different people in different ways</h1>
                <div className='symptoms__img' >
                    <img src={symp1} className='sypmtoms__imgs' alt='symp1'/>
                    <img src={symp2} className='sypmtoms__imgs' alt='symp2'/>
                    <img src={symp3} className='sypmtoms__imgs' alt='symp3'/>
                </div>
                <p className='symptoms__info'>People with fever, cough or difficulty breathing should call their doctor <br />
                    and seek medical attention.
                </p>
                <button onClick={redirect} className='btn btn__symptoms'>Contact now</button>
            </div>
        
        
    )
}

export default Common
