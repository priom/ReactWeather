import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Built by <a href="https://priom.github.io">PrioM</a></p>
            <p>Here are tools that are used: </p>
            <ul>
                <li><a href="https://facebook.github.io/react/" target="__blank">React</a></li>
                <li><a href="http://openweathermap.org/" target="__blank">Open Weather Map API</a></li>
                <li><a href="https://webpack.github.io/" target="__blank">WebPack</a></li>
                <li><a href="http://foundation.zurb.com/" target="__blank">Foundation 6</a></li>
            </ul>
            <p>Deployed to <a href="https://www.heroku.com/" target="__blank">Heroku</a></p>
            <p>Star my project on <a href="https://github.com/priom/ReactWeather">GitHub</a></p>
        </div>
    );
};

module.exports = About;