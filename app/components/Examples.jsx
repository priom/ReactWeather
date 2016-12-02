import React from 'react';
import { Link } from 'react-router';

const Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try.</p>
            <ol>
                <li>
                    <Link to="/?location=Toronto"> Toronto, ON</Link>
                </li>
                <li>
                    <Link to="/?location=NewYork"> New York, NY</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;