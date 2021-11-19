import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Navbar,Nav } from 'react-bootstrap'

import '../App.css';

function Header({ currentPage, handlePageChange }) {
    return (

        <header className=" align-items-end sticky-top flex-column App-header" >


            <Container className="  text-light" to="/">
                <h1>
                    Gavin Takawira
                </h1>
            </Container>

         
            <Navbar variant="dark">
                <Container>
                    
                    <Nav className="me-auto">
                        <Nav.Link href="/">About Me</Nav.Link>
                        <Nav.Link href="work">Portfolio</Nav.Link>
                        <Nav.Link href="contact">Contact Me</Nav.Link>
                        <Nav.Link href="contact">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </header>

    )
}
export default Header