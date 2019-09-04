import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from 'pages/Main';
import Profile from 'pages/Profile';

const RouteApp = () => {
    return (
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/profile" component={Profile} />
        </Router>
    )
}

export default RouteApp;