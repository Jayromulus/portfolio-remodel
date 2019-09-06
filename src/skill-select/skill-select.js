import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './skill-select.css'
import Bio from '../bio/bio'

// import border from '../assets/border.png'

function Skills() {

    // const changeActive = (clicked) => {
    //     let previous = document.getElementsByClassName('active');
    //     if(document.getElementsByClassName('active')) {
    //         console.log(true)
    //     }
    //     previous.className = "inactive";
    //     document.getElementById(clicked).className = "active";
    // }

    // <Button className="active" onClick={() => { changeActive('HTML') }} id="HTML"><br /></Button>
    // <Button id="CSS" onClick={() => { changeActive('CSS') }}><br /></Button>
    // <Button id="JS"><br /></Button>

    // let [active, setActive] = useState(true);
    let [current, setCurrent] = useState('css');

    return (
        <div 
            id="css-width" 
            className={
                current === 'css' ? 'cssbg' :
                current === 'react' ? 'reactbg' : 
                current === 'angular' ? 'angularbg' : 
                current === 'html' ? 'htmlbg' : null
            }>
            <ButtonGroup>
                <div id="top-row">
                    <Button 
                        className={current === 'html' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('html');}} 
                        id="HTML"><br />
                    </Button>
                    <Button 
                        className={current === 'css' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('css');}} 
                        id="CSS"><br />
                    </Button>
                    <Button 
                        className={current === 'js' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('js');}} 
                        id="JS"><br />
                    </Button>
                </div>
                <br />
                <div id="middle-row">
                    <Button 
                        className={current === 'react' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('react');}} 
                        id="React"><br />
                    </Button>
                    <Button 
                        className={current === 'me' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('me');}} 
                        id="jerome">Me
                    </Button>
                    <Button 
                        className={current === 'angular' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('angular');}} 
                        id="Angular"><br />
                    </Button>
                </div>
                <br />
                <div id="bottom-row">
                    {/* <a href="https://jeromeapi.firebaseapp.com/" target="blank"> */}
                        <Button 
                            className={current === 'api' ? "active" : "inactive"} 
                            onClick={() => {setCurrent('api');}} 
                            id="API"><br />
                        </Button>
                    {/* </a> */}
                    {/* <a href="https://jf-twit-combo.herokuapp.com/" target="blank"> */}
                        <Button
                            className={current === 'blue' ? "active" : "inactive"} 
                            onClick={() => {setCurrent('blue');}} 
                            id="Mashr"><br />
                        </Button>
                    {/* </a> */}
                    <Button 
                        className={current === 'wip' ? "active" : "inactive"} 
                        onClick={() => {setCurrent('wip');}}>WIP
                    </Button>
                </div>
            </ButtonGroup>
            {/* <img src={border} /> */}

            <Bio current={current}></Bio>

        </div>
    )
}

export default Skills;