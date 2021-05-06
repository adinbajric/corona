import React,{useState} from 'react'

import othr from '../../assets/othr.png';
import othr1 from '../../assets/othr1.png';
import othr2 from '../../assets/othr2.png';
import othr3 from '../../assets/othr3.png';
import './Other.css';

function Other() {
    const[hide, setHide] = useState(true);
    
    return (
        <div>
            <div className='symptoms__container symptoms__other'>
            <h3 className='symptoms__heading--small'>Other Symptoms Include</h3>
                <div className='symptoms__img symptoms-other__img'>
                    <img src={othr} className='sypmtoms__imgs' alt='othr'/>
                    <img src={othr1} className='sypmtoms__imgs' alt='othr1'/>
                    <img src={othr2} className='sypmtoms__imgs' alt='othr2'/>
                    <img src={othr3} className='sypmtoms__imgs' alt='othr3'/>                    
                </div>
                <p className='symptoms__info'>People with fever, cough or difficulty breathing should call their doctor
                    and seek medical attention.
                </p>
                <p className={hide ? 'notVisible' : 'symptoms__info'}>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus.Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette.</p>
                <button onClick={() => setHide(!hide)} className='btn btn__symptoms'>{hide ? 'Read more' : 'Show less'}</button>
            </div>
        </div>
    )
}

export default Other
