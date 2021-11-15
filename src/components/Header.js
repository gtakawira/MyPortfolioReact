import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';

function Header({ currentPage, handlePageChange }) {
    return (

        <header className="App d-flex align-items-end flex-column App-header" fluid>



            <h1> Gavin Takawira</h1>

            <ul>
                <li className="nav"  ><a href="aboutme">About Me</a></li>
                <li className="nav"  sm><a href="work">Work</a></li>
                <li className="nav"><a href="contact">Contact Me</a></li>
                <li className="nav"><a target="_blank" href="assets/file/Gavin Takawira Resume 2021.pdf">Resume</a></li>
            </ul>




        </header>

    )
}
export default Header