import React from 'react'
import './Conspiracy.css'
import conspiracy from "../../assets/conspiracy.png";

function Conspiracy() {
    return (
        <div className='conspiracy'>
          <img className='conspiracy__img' src={conspiracy} alt='conspiracy'/>
            <h1 className='title__big conspiracy__title'>Be aware of Coronavirus conspiracy theories</h1>
            <p className='conspiracy__quote'>
                "The democrats are politicizing coronavirus..this is their new hoax - Donald Trump"
            </p>      
        </div>
    )
}

export default Conspiracy
