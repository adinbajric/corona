import React,{useState} from 'react'
import './Hero.css';
import ic_ig from '../../assets/ic_ig.svg';
import ic_yt from '../../assets/ic_yt.png';
import Fill from '../../assets/Fill.svg';

function Hero() {
    const[hide, setHide] = useState(true);

    return (
        <div className='hero'>
            <div className='hero__container'>
                <h1 className='hero__heading'>We are fighting with <br /> Coronavirus!</h1>
                <p className='hero__text'>Stay Aware of the Coronavirus, Stay Home & Safe For You and Others, And Maintain All the Safety Measures by Medical Professionals
                to Defeat It!</p>
                <button onClick={() => setHide(!hide)} className='btn btn__standard'>{hide ? 'Read more' : 'Show less'}</button>
                <p className={hide ? 'notVisible' : 'hero__text'}>If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!You also find out more about WHO's recommendations for getting vaccinated on our public advice page on COVID-19 vaccines. </p>
            </div>
            <div className='hero__footer'>
                <p className='hero__number'>+1 797 735 3618</p>
                <div className='hero__social'>
                    <img className='hero__icon' src={ic_ig} alt='instagram'/>
                    <img className='hero__icon' src={ic_yt} alt='youtube'/>
                    <img className='hero__icon' src={Fill} alt='facebook'/>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;

