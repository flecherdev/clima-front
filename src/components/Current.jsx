import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import CardGroup from 'react-bootstrap/CardGroup'

const Current = (props) => {
    const URL = `http://localhost:3001/v1/current/${props.city ? props.city : ''}`
    const [weather, setWeather] = useState([])
   
    useEffect( () => {
        fetch(URL)
            .then( response => response.json() )
            .then( weather => setWeather(weather.data))
    }, [])

    return (
        <Weather
            weather={weather}
            color='danger'
        ></Weather>
    )
}

export default Current