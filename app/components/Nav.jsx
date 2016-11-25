import React from 'react';
import { Link } from 'react-router';

const Nav = React.createClass ({
    render () {
        return (
            <div>
                <h1>Nav</h1>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;