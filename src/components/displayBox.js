import React from "react";
import { Route } from 'react-router-dom';
import Lists from "../pages/Lists";
import Profile from "../pages/Profile";
import AddStudent from "../pages/AddStudent";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";




function DisplayBox() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/profiles/:id" component={Profile} />
            <Route path="/addStudent" component={AddStudent} />
            <Route path="/dashBoard" component={DashBoard} />
            <Route path="/list" component={Lists}/>
            <Route path="/hello" />

        </div >

            )
        }
        
export default DisplayBox