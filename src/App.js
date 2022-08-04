import React, { useState, useEffect } from 'react';
// import React, { lazy, Suspense } from 'react';
import { initI18n } from '@plugins/i18n';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '@services/routes';
import { Navigation } from '@components/Navigation';
import Main from '@pages/Main/Main';
import Experience from '@pages/Experience/Experience';
import Contacts from '@pages/Contacts/Contacts';
import Footer from '@components/Footer/Footer';
import css from './App.module.css';

const App = () => {
  const [i18nLoaded, setI18nLoaded] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    initI18n().then(() => {
      setI18nLoaded(true);
    });
  }, [i18nLoaded]);

  useEffect(() => {
    console.log(
      Object.entries({
        i18nLoaded: i18nLoaded,
      })
        .filter(([key, value]) => key && !value)
        .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {}),
    );
    if (i18nLoaded) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [i18nLoaded]);

  const handleOpenMenu = evt => {
    evt.target && setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      {loaded ? (
        <>
          <Navigation handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />

          <main className={css.mainContainer}>
            <Switch>
              <Route exact path={routes.main} component={Main} />
              <Route path={routes.experience} component={Experience} />
              <Route path={routes.contacts} component={Contacts} />
              <Redirect to={routes.main} />
            </Switch>
          </main>
          <Footer />
        </>
      ) : (
        <h2 className={css.loading}>
          loading <span className={css.loading_one}>.</span>
          <span className={css.loading_two}>.</span>
          <span className={css.loading_three}>.</span>
        </h2>
      )}
    </>
  );
};
export default App;
