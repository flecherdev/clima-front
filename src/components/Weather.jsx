import React from 'react'
import Card from 'react-bootstrap/Card'
import moment from 'moment'

const Weather = (props) => {
    console.log('estoy en weather')
    console.log(props.weather)
    return (
        <Card 
            bg={props.color}
            style={{ width: '18rem' }}
            text='white'
            className="mb-2"
        >
            <Card.Header>{props.weather.name}</Card.Header>
            {props.weather.weather &&
                 props.weather.weather.map( dato => (
                    <Card.Body key={dato.id}>
                       <Card.Title>{dato.main}</Card.Title>
                           <Card.Text>
                               {dato.description}
                           </Card.Text>
                           <Card.Text>
                               {dato.dt_txt}
                                {/* {moment(dato.dt_txx).format('MMMM Do YYYY, h:mm:ss a')} */}
                           </Card.Text>
                   </Card.Body> 
                ))
            }
            <Card.Footer>
                <small className="">{moment(props.weather.dt).format('MMMM Do YYYY, h:mm:ss a')}</small>
            </Card.Footer>
        </Card>
    )
}

export default Weather