import React from 'react';
import {Link} from 'react-router-dom'

function Headrer(){

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Random Users App</span>
                <Link to="/">Home</Link>
                <Link to="/users">User List</Link>
                <Link to="/users/1">User Detail</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}


export default Headrer;