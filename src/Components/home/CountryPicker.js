import React,{useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import {countries} from '../../api/Api';
import './CountryPicker.css';

function CountryPicker({handleCountryChange}) {
    const[fetchedCountries, setFetchedCountries]=useState([]);

    useEffect(() => {
        const data = async() => {
            const res = await countries()
            setFetchedCountries(res)
        }
        data()
    },[setFetchedCountries])

    return (
        <div className='countryPicker'>
        <FormControl >
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}  >
                <option value=''>Global</option> 
                {fetchedCountries.map((item,i) => <option key={i} value={item}>{item}</option>)}               
            </NativeSelect>
        </FormControl>
        </div>
        
    )
}

export default CountryPicker
