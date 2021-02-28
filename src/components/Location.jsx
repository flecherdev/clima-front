import React, { useState, useEffect } from 'react'
import Weather from './Weather'

const Location = () => {    
    const URL = 'http://localhost:3001/v1/location'

    const [weather, setWeather] = useState([])

    useEffect( async () => {
        fetch(URL)
            .then( response => response.json())
            .then( weather => setWeather(weather.data))

        // const fetchData = async () => {
        //     const result = await axios(URL);
        //     const data = await result.json();
        //     setWeather(data.data);
        // };
        // fetchData();
    
    }, [])

    return <Weather 
        weather={weather}
        color=''
    ></Weather>
}

export default Location