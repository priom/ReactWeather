import React from 'react';

const WeatherMessage = ({temp, location}) => {
    return (
        <h3>It's {temp}&deg;C in {location}</h3>
    )
}

module.exports = WeatherMessage;