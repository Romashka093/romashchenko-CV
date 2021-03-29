import React from 'react';
import lang from '../../../lang';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import css from './NavList.module.css';

function NavList({ handleOpenMenu }) {
  return (
    <div className={css.navContainer}>
      <ul className={css.navList}>
        <li className={css.navItem} onClick={handleOpenMenu}>
          <NavLink
            exact
            to={routes.main}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {lang.eng.about}
          </NavLink>
        </li>
        <li className={css.navItem} onClick={handleOpenMenu}>
          <NavLink
            to={routes.experience}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {lang.eng.experience}
          </NavLink>
        </li>
        <li className={css.navItem} onClick={handleOpenMenu}>
          <NavLink
            to={routes.contacts}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {lang.eng.contacts}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavList;
