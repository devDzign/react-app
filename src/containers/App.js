import React from 'react';
import {Route, Switch} from 'react-router-dom'


import Header from "./Header";
import Home from '../components/Home'
import Ressources from '../components/resources/Ressources'

import  RequireAuthentication  from '../helpers/RequireAuthentication'
import TodoApp from "../components/todoList/TodoApp";


function App() {
  return (
    <>
        <Header/>
        <div className="container mt-5">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/todo-list" component={RequireAuthentication(TodoApp)}/>
                <Route exact path="/resources" component={RequireAuthentication(Ressources)}/>
            </Switch>
        </div>
    </>
  );
}

export default App;
