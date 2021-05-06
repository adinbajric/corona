import axios from 'axios';
const urlCovidStatistics = 'https://covid19.mathdro.id/api';
const urlNews = 'https://newsapi.org/v2/everything?q=Covid=2021-05-01&sortBy=popularity&language=en&apiKey=';
const newsApiKey = '8d70485744424d05986d8349376cd6c2';
/* const googleApiKey='AIzaSyBn0NYOk5HAGydEaS1yv2QMz9WJFe0r4C4';  */


export const fetchNews = async() =>{
    try {
        const {data:{articles}} = await axios.get(`${urlNews}${newsApiKey}`);
        let newArticles = articles.sort((a, b) => {
            let c = new Date(a.publishedAt);
            let d = new Date(b.publishedAt);
            return d-c;
        });
        return  newArticles;
    } catch (error) {
        console.log(error);
    }
}

export const Api = async(country) => {
    let changeableUrl = urlCovidStatistics;
    if(country){
        changeableUrl = `${urlCovidStatistics}/countries/${country}`;
    }
    try{        
        const {data} = await axios.get(changeableUrl);         
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    }catch(error){
        console.log(error);
    }    
}

export const fetchDailyDate = async() => {
    try {
        const {data} = await axios.get(`${urlCovidStatistics}/daily`);  
        
        const modifiedData = data.map(item => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date:item.reportDate,
        }))
        return modifiedData;
        
    } catch (error) {
        console.log(error);
    }   
}

export const countries = async() => {
    try {
        const {data:{countries}} = await axios.get(`${urlCovidStatistics}/countries`);
        return countries.map(country => country.name)
    } catch (error) {
        console.log(error);
    }
}

