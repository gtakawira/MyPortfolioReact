import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import '../App.css';
import Aboutme from './aboutme';
import Portfolio from './portfolio';
import Contact from './contact'



function Section() {
    return (
        <div className="container">
            <Route exact path="/">
                <Aboutme />
            </Route>
            <Route exact path="/work">
                <Portfolio />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </div>
    )
}
export default Section
