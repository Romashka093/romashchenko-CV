import React, { Component } from 'react';
// import React, { Component, lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
// import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Main from './pages/Main/Main';
import Experience from './pages/Experience/Experience';
import Contacts from './pages/Contacts/Contacts';
import './App.module.css';

export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <Switch>
          <Route exact path={routes.main} component={Main} />
          <Route path={routes.experience} component={Experience} />
          <Route path={routes.contacts} component={Contacts} />
          {/* <Redirect path={routes.main} component={Main} /> */}
        </Switch>
      </>
    );
  }
}
