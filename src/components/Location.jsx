import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import Forecast from './Forecast';
import CardGroup from 'react-bootstrap/CardGroup'
import Current from './Current'

const Location = () => {    
    const URL = 'http://localhost:3001/v1/location'
    const [weather, setWeather] = useState([])
    const citys = [
        'Montreal',
        'Florida',
        'Montevideo',
        'Rio De Janeiro',
        'Playa Grande'
    ]


    useEffect( () => {
        fetch(URL)
            .then( response => response.json())
            .then( weather => setWeather(weather.data))
    }, [])

    return (
        <>
            <Weather 
                weather={weather}
                color='primary'
            ></Weather>

            <Forecast
                city={weather.name}
            ></Forecast>
            
            <CardGroup>
                {citys.map ( city => (
                    <Current
                        city={city}
                    ></Current>
                ))}
            </CardGroup>
        </>
    )
}

export default Location