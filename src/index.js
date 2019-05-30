import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './components/Loader';
import './index.css';

const Reader = Loadable({
  loader: () =>
    import('./components/Reader') /* webpackChunkName "reader-page" */,
  loading: Loader,
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/reader" component={Reader} />
      <Redirect to="/reader" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
