import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './index.css';
import { mainRoutes, adminRoutes } from './router';
import * as serviceWorker from './serviceWorker';
import { Switch } from 'antd';

ReactDOM.render(

  <Router>

      {mainRoutes.map(route => {
        return <Route key={route.path} {...route} />
      })}

  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
