import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

const Weather = React.createClass({
    render() {
        return (
            <div>
                <h3>Weather</h3>
                <WeatherForm></WeatherForm>
                <WeatherMessage></WeatherMessage>
            </div>
       )
   } 
});

module.exports = Weather;