import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';
import QrCode from '../views/QrCode';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/task" exact component={Task}/>
        <Route path="/task/:id" exact component={Task}/>
        <Route path="/qrcode" exact component={QrCode}/>
      </Switch>
    </BrowserRouter>
  )
}