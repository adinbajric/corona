import React from 'react'
import './Images.css'
import InstaImage1 from '../../assets/InstaImage1.jpg'
import InstaImage2 from '../../assets/InstaImage2.jpg'
import InstaImage3 from '../../assets/InstaImage3.jpg'
import InstaImage4 from '../../assets/InstaImage4.jpg'
import InstaImage5 from '../../assets/InstaImage5.jpg'
import InstaImage6 from '../../assets/InstaImage6.jpg'
import InstaImage7 from '../../assets/InstaImage7.jpg'
import InstaImage8 from '../../assets/InstaImage8.jpg'
import InstaImage9 from '../../assets/InstaImage9.jpg'
import InstaImage10 from '../../assets/InstaImage10.jpg'
import InstaImage11 from '../../assets/InstaImage11.jpg'
import InstaImage12 from '../../assets/InstaImage12.jpg'

function Images() {
    return (
        <div className='imageGallery'>
            <div className='imageGallery__box'>
                <div className='imgBox'>
                    <img src={InstaImage1} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage2} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage3} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage4} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage5} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage6} className='imgBox__img' alt='instaImage'/>
                </div>
            </div>
            <div className='imageGallery__box'>
                <div className='imgBox'>
                    <img src={InstaImage7} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage8} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage9} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage10} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage11} className='imgBox__img' alt='instaImage'/>
                </div>
                <div className='imgBox'>
                    <img src={InstaImage12} className='imgBox__img' alt='instaImage'/>
                </div>
            </div>           
        </div>
    )
}

export default Images
