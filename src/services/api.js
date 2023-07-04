import { useState } from "react";
const  KEY = '88241663ad1048ebade203214221507';


const fetchData = async (city) =>{
    
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&aqi=no`
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json()
        
    return data;
}

export default fetchData;