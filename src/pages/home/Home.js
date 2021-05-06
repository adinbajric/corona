import React,{useState, useEffect} from 'react'
import './Home.css';
import {Api} from '../../api/Api';
import Card from '../../Components/home/Card';
import Chart from '../../Components/home/Chart';
import CountryPicker from '../../Components/home/CountryPicker';
import Hero from '../../Components/home/Hero'
import Info from '../../Components/home/Info';
import Gallery from '../../Components/home/Gallery';
import Services from '../../Components/home/Services';
import PopUp from '../../Components/popup/PopUp';
import Images from '../../Components/covid19/Images';

function Home() {
  const[fetchedData, setFetchedData] = useState({});
  const[country, setCountry] = useState('');

  useEffect(() => {
    const fetchApi = async() => {
      const data = await Api();
      setFetchedData(data);
    }
    fetchApi();    
  },[])

  const handleCountryChange = async(country) => {
    const data = await Api(country);    
    setFetchedData(data);
    setCountry(data);
  }

  const [hide, setHide] = useState(true);
    const showPopUp = () => {
        setHide(false);              
    }
    const closePopUp = () => {
        setHide(true);
    }

     return (
        <div className='home'>
            <Hero/>
            <Info/>
            <Card fetchedData={fetchedData}/>
            <CountryPicker handleCountryChange={handleCountryChange}/> 
            <Chart fetchedData={fetchedData} country={country}/>
            <div className='services__popUp'>
              <Services showPopUp={showPopUp} />
              <PopUp closePopUp={closePopUp} hide={hide} popUpText='We have received your message. Our managers will review it and contact you as soon as possible.'/>
            </div>  
            <Images  />            
            <Gallery />            
        </div>
    )
}

export default Home
