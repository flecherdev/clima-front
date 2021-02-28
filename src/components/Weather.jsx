import React from 'react'
import Card from 'react-bootstrap/Card'

const Weather = (props) => {
    return (
        <Card 
            bg={props.color}
            style={{ width: '18rem' }}
            text='white'
            className="mb-2"
        >
            {/* <Card.Img variant="top" src={sun} /> */}
            <Card.Header>{props.weather.name}</Card.Header>
            {props.weather.weather &&
                 props.weather.weather.map( dato => (
                    <Card.Body key={dato.id}>
                       <Card.Title>{dato.main}</Card.Title>
                           <Card.Text>
                               {dato.description}
                           </Card.Text>
                   </Card.Body> 
                ))
            }
        </Card>
    )
}

export default Weather