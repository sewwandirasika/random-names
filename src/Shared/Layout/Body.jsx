import React from 'react';

import Dashboard from './../../components/Dashboard/DashBoard'
import UserList from './../../components/Users/UserList'
import UserDetail from './../../components/Users/UserDetail'

import About from './../../components/InfoPages/About'
function Body(){

    return (
        <div className="container">
           <Dashboard />
           <UserList />
           <UserDetail />
           <About />
        </div>
    )
}


export default Body;