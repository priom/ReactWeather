import React from 'react';

const WeatherForm = React.createClass({
    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <button>Get Weather</button>
                </form>
            </div>
       )
   } 
});

module.exports = WeatherForm;