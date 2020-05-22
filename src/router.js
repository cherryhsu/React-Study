import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './pages/app'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail'
import NoMatch from './pages/404'
export default function IRouter() {
    return <Router>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}>
            <Redirect to="/login"></Redirect>
        </Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="*" component={NoMatch}></Route>
    </Router>
}