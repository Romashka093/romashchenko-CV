import React from 'react';
import lang from '../../lang';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to={routes.main}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {lang.eng.about}
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to={routes.experience}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {lang.eng.experience}
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to={routes.contacts}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {lang.eng.contacts}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
