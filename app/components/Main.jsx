import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
    return (
        <div>
            <Nav></Nav>
            <h2>Main</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;