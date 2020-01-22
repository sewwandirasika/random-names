import React from 'react';
// using ES6 modules
import {Route,Switch} from "react-router-dom";

import Dashboard from './../../components/Dashboard/DashBoard'
import UserList from './../../components/Users/UserList'
import UserDetail from './../../components/Users/UserDetail'


import About from './../../components/InfoPages/About'
function Body(){

    return (
        <div className="container">
          
          
        <Switch>
           <Route path="/users/:id" component ={UserDetail} /> 
           <Route path="/users" component ={UserList} /> 
           <Route path="/about"> <About /></Route>
           <Route path="/" component ={Dashboard} /> 
          
        </Switch>
        </div>
    )
}


export default Body;