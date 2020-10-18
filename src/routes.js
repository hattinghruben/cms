import React from 'react';
import NavBar from "./components/navBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./views/home";
import Reports from "./views/reports";
import Fake from "./views/emails";

const Routes = () => {
    return (
        <div className='App'>
            <NavBar/>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/'>
                    <Redirect to='/home'/>
                </Route>
                <Route exact path='/home/reports' component={Reports}/>
                <Route exact path='/home/emails' component={Fake}/>
            </Switch>
        </div>
    )
};
export default Routes;
