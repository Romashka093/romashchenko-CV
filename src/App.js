import React, { useState } from 'react';
// import React, { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Main from './pages/Main/Main';
import Experience from './pages/Experience/Experience';
import Contacts from './pages/Contacts/Contacts';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import css from './App.module.css';

export default function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = evt => {
    evt.target && setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <Navigation handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />

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
