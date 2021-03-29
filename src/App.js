// import React from 'react';
import React, { Component } from 'react';
// import React, { Component, lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
// import { Route, Switch } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Main from './pages/Main/Main';
import Experience from './pages/Experience/Experience';
import Contacts from './pages/Contacts/Contacts';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import css from './App.module.css';

class App extends Component {
  state = {
    isOpenMenu: false,
  };

  handleOpenMenu = evt => {
    evt.target && this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };
  render() {
    const { isOpenMenu } = this.state;
    return (
      <>
        <Navigation
          handleOpenMenu={this.handleOpenMenu}
          isOpenMenu={isOpenMenu}
        />

        <main className={css.mainContainer}>
          <Switch>
            <Route exact path={routes.main} component={Main} />
            <Route path={routes.experience} component={Experience} />
            <Route path={routes.contacts} component={Contacts} />
            <Route component={Error} />
            <Redirect to={routes.main} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
