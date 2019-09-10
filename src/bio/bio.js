import React from 'react';
import './bio.css'

function Bio(props) {
    return (
        <div id="all">
            {
                props.current === 'html' ?
                <h1>I have been i have been i have been i have been i hve been i have been i have been i have been i have neem i have been i have been</h1> :
                props.current === 'css' ?
                <h1>CSS i have been CSS i have been CSS i have been CSS i have been CSS i have been CSS i have been CSS i have been CSS i have been CSS i have been</h1> :
                props.current === 'js' ?
                <h1>JS i have been JS i have been JS i have been JS i have been JS i have been JS i have been JS i have been JS i have been JS i have been JS i have been</h1> :
                props.current === 'react' ?
                <h1>REACT i have been REACT i have been REACT i have been v REACT i have been REACT i have been REACT i have been REACT i have been REACT i have been</h1> :
                props.current === 'me' ?
                <h1>ME STUFF ME STUFF ME STUFF ME STUFF ME STUFF ME STUFFME STUFF ME STUFF ME STUFF ME STUFF ME STUFF ME STUFF ME STUFF ME STUFF ME STUFF ME STUFFME STUFF</h1> :
                props.current === 'angular' ?
                <h1>ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF ANGULAR STUFF</h1> :
                props.current === 'api' ?
                <h1>API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF API STUFF</h1> :
                props.current === 'blue' ?
                <h1>BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF BLUE STUFF</h1> :
                props.current === 'wip' ?
                <h1>WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF WIP STUFF</h1> :
                <h1>Select a category to learn more</h1>
            }
        </div>
    )
}

export default Bio;