import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import css from './NavList.module.css';
import routes from '@services/routes';

const NavList = ({ handleOpenMenu }) => {
  const { t } = useTranslation();
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
            {t('about')}
          </NavLink>
        </li>
        <li className={css.navItem} onClick={handleOpenMenu}>
          <NavLink
            to={routes.experience}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {t('experience')}
          </NavLink>
        </li>
        <li className={css.navItem} onClick={handleOpenMenu}>
          <NavLink
            to={routes.contacts}
            className={css.navLink}
            activeClassName={css.activeNavLink}
          >
            {t('contacts')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
