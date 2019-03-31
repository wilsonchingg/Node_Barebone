import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

// import our react pages
import Home from './pages/home.jsx';
/*
* the route is compared from top to bottom,
* therefore /search will be rendered instead of /:category
*/
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
