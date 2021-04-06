import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import ListPrice from './pages/ListPrice';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/devradar" exact component={App}/>
                <Route path="/devs" component={ListPrice} />
            </Switch>
        </BrowserRouter>
    )
}