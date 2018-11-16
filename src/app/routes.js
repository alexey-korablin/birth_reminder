'use strict';
import React from 'react';
// import {
//     Router,
//     Route,
//     browserHistory
// } from 'react-router';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";


import Home from './views/home';

const history = createBrowserHistory();

export default () => {
    return (<Router history={history}>
        <Route path='/' component={Home} />
    </Router>);
}
