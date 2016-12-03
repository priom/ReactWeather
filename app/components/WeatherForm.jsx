import React from 'react';

const WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        const location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        } else {
            alert('Enter a city!');
        }
    },
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="Search Weather..."/>
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
       )
   } 
});

module.exports = WeatherForm;