import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

const Weather = React.createClass({
    getInitialState () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        const that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    render() {
        const {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}></ErrorModal>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
       )
   }
});

module.exports = Weather;
