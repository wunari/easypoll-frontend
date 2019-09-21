import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Vote from './pages/Vote';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/vote" component={Vote} />
        </Switch>
    </BrowserRouter>
);

export default Routes;