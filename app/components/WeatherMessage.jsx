import React from 'react';

const WeatherMessage = React.createClass({
    render() {
        const {temp, location} = this.props;

        return (
            <h3>It's {temp} in {location}</h3>
       )
   } 
});

module.exports = WeatherMessage;