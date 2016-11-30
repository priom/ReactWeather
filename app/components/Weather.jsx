import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

const Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Toronto',
            temp: -20
        }
    },
    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 25 
        });
    },
    render() {
        const {temp, location} = this.state;

        return (
            <div>
                <h3>Weather</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
       )
   } 
});

module.exports = Weather;
