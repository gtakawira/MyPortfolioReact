import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import '../App.css';

function Header({ currentPage, handlePageChange }) {
    return (

        <header className="App d-flex align-items-end flex-column App-header" fluid>


            <Link className="text-dark" to="/">
                <h1 className="m-0" style={{ fontSize: '3rem' }}>
                Gavin Takawira
                </h1>
            </Link>
           

            <ul>
                <li className="nav"  ><a href="/">About Me</a></li>
                <li className="nav" sm><a href="work">Work</a></li>
                <li className="nav"><a href="contact">Contact Me</a></li>
                <li className="nav"><a target="_blank" href="assets/file/Gavin Takawira Resume 2021.pdf">Resume</a></li>
            </ul>




        </header>

    )
}
export default Header