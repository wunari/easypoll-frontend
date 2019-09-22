import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Vote from './pages/Vote';
import Result from './pages/Result';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/vote" component={Vote} />
            <Route path="/result" component={Result} />
        </Switch>
    </BrowserRouter>
);
  
export default Routes;