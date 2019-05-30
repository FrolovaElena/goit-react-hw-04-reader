import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './components/Loader';
import './index.css';

const Reader = Loadable({
  loader: () =>
    import('./components/Reader') /* webpackChunkName "reader-page" */,
  loading: Loader,
});

ReactDOM.render(
  <HashRouter basename="/">
    <Switch>
      <Route path="/reader" component={Reader} />
      <Redirect to="/reader" />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
