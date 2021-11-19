import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

function Footer() {
    return (

        <footer className=" fixed-bottom">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                
                <div>
               
                 
                 <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={['fab', 'instagram']}  /></a>
                 <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                    <a href="https://twitter.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                 
                </div>
                </nav>
                
                </footer>
    )}
                export default Footer