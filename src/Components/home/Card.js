import React from 'react'
import './Card.css'
import CountUp from 'react-countup';
import Loading from '../loading/Loading';

function Card({fetchedData:{confirmed, deaths, recovered, lastUpdate}}) {
    if(!confirmed){
        return <Loading/>;
    }
    return (
        <div className='cards-container'>
            <div className='card card__infected'>
                <p className='card__status'>
                    Infected
                </p>
                <h3 className='card__number'>
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2}
                        separator=','
                    />                    
                </h3>
                <p className='card__date'>
                    {new Date(lastUpdate).toDateString()}
                </p>
                <p className='card__title'>
                    Number of active cases of Covid-19
                </p>
            </div>
            <div className='card card__recovored'>
                <p className='card__status'>
                    Recovered
                </p>
                <h3 className='card__number'>
                    <CountUp
                        start={0}
                        end={recovered.value}
                        duration={2}
                        separator=','
                    />      
                </h3>
                <p className='card__date'>
                    {new Date(lastUpdate).toDateString()}
                </p>
                <p className='card__title'>
                    Number of recoveries cases of Covid-19
                </p>
            </div>
            <div className='card card__deaths'>
                <p className='card__status'>
                    Deaths
                </p>
                <h3 className='card__number'>
                    <CountUp
                        start={0}
                        end={deaths.value}
                        duration={2}
                        separator=','
                    />  
                </h3>
                <p className='card__date'>
                    {new Date(lastUpdate).toDateString()}
                </p>
                <p className='card__title'>
                    Number of death cases of Covid-19
                </p>
            </div>            
        </div>
    )
}

export default Card;
