import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import CardGroup from 'react-bootstrap/CardGroup'

const Forecast = (props) => {
    const URL = `http://localhost:3001/v1/forecast/${props.city ? props.city : ''}`
    const [listWeather, setListWeater] = useState([])

    useEffect( () => {
        fetch(URL)
            .then( response => response.json() )
            .then( listWeather => setListWeater(listWeather.data))
    }, [])

    return (
        <>
            <h3>{props.city}</h3>
            <CardGroup>
                {listWeather &&
                    listWeather.list.map( (weather, i) => (
                        <Weather
                            key={i}
                            weather={weather}
                            color='success'
                        ></Weather>
                    ))
                }
            </CardGroup>
        </>
    )
}

export default Forecast