import React from 'react';
import './bio.css'

function Bio(props) {
    return (
        <div id="all">
            {
                props.current === 'html' ?
                <h1>HTML STUFF</h1> :
                props.current === 'css' ?
                <h1>CSS STUFF</h1> :
                props.current === 'js' ?
                <h1>JS STUFF</h1> :
                props.current === 'react' ?
                <h1>REACT STUFF</h1> :
                props.current === 'me' ?
                <h1>ME STUFF</h1> :
                props.current === 'angular' ?
                <h1>ANGULAR STUFF</h1> :
                props.current === 'api' ?
                <h1>API STUFF</h1> :
                props.current === 'blue' ?
                <h1>BLUE STUFF</h1> :
                props.current === 'wip' ?
                <h1>WIP STUFF</h1> :
                <h1>Select a category to learn more</h1>
            }
        </div>
    )
}

export default Bio;