import React from 'react';
import Header from './Header';
import Body from './Body';
import {BrowserRouter} from "react-router-dom";
function Mainlayout(){
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Body/>
            </BrowserRouter>
        </div>
    )
}
export default Mainlayout