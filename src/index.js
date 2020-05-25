import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './index.css';
import App from './App'
import { mainRoutes } from './routes';
import * as serviceWorker from './serviceWorker';

/* 打开以admin为路由的组件时 外层加app组件 */
ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/admin" render={routeProps=><App {...routeProps} />} />
      {mainRoutes.map(route => {
        return <Route key={route.path} {...route} />
      })}
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
