import React, { Component } from "react";
import Slider from "react-slick";
import doctor from '../../assets/doctor.jpg'
import doctor1 from '../../assets/doctor1.jpg'
import doctor2 from '../../assets/doctor2.jpg'
import doctor3 from '../../assets/doctor3.jpg'
import './Gallery.css';


  export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <section className='galleryContainer'>
          <h5 className='gallery__title--small'>Our Medical Team</h5>
          <h2 className='gallery__title--big'> Coronavirus specialists</h2>
          <Slider {...settings}>
            <div  className='gallery'>
              <img className='gallery__img' src={doctor} alt='doctor'/>
              <div className='gallery__info'>
                  <p className='gallery__infoDr'>Infectious disease doctor, MD, PhD</p>
                  <h3 className='gallery__infoName'>Bettie Lawson</h3>
                  <p className='gallery__infoAbout'> Dr. Lawson works in Staten Island, NY and specializes in Infectious Disease and Pediatrics. Dr. Lawson is affiliated with Staten Island University Hospital North.</p>
              </div>
            </div>
            <div className='gallery'>
                <img className='gallery__img' src={doctor2} alt='doctor'/>
                <div className='gallery__info'>
                    <p className='gallery__infoDr'>Infectious disease doctor, MD, PhD</p>
                    <h3 className='gallery__infoName'>Bettie Lawson</h3>
                    <p className='gallery__infoAbout'> Dr. Lawson works in Staten Island, NY and specializes in Infectious Disease and Pediatrics. Dr. Lawson is affiliated with Staten Island University Hospital North.</p>
                </div>
            </div>
            <div className='gallery'>
                <img className='gallery__img' src={doctor3} alt='doctor'/>
                <div className='gallery__info'>
                    <p className='gallery__infoDr'>Infectious disease doctor, MD, PhD</p>
                    <h3 className='gallery__infoName'>Bettie Lawson</h3>
                    <p className='gallery__infoAbout'> Dr. Lawson works in Staten Island, NY and specializes in Infectious Disease and Pediatrics. Dr. Lawson is affiliated with Staten Island University Hospital North.</p>
                </div>
            </div>
            <div className='gallery'>
                <img className='gallery__img' src={doctor1} alt='doctor'/>
                <div className='gallery__info'>
                  <p className='gallery__infoDr'>Infectious disease doctor, MD, PhD</p>
                  <h3 className='gallery__infoName'>Bettie Lawson</h3>
                  <p className='gallery__infoAbout'> Dr. Lawson works in Staten Island, NY and specializes in Infectious Disease and Pediatrics. Dr. Lawson is affiliated with Staten Island University Hospital North.</p>
                </div>
            </div>  
          </Slider>
        </section>
      );
    }
  }


  