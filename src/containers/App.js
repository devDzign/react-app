import React from 'react';
import {Route, Switch} from 'react-router-dom'


import Header from "./Header";
import Home from '../components/Home'
import Ressources from '../components/Ressources'

import  RequireAuthentication  from '../helpers/RequireAuthentication'


function App() {
  return (
    <>
        <Header/>
        <div className="container mt-5">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/ressources" component={RequireAuthentication(Ressources)}/>
            </Switch>
        </div>
    </>
  );
}

export default App;
