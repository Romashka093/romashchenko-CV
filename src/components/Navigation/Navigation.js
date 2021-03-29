import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Link } from 'react-router-dom';
import photo from '../../assets/img/me.jpg';
import routes from '../../routes';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import css from './Navigation.module.css';

function Navigation({ isOpenMenu, handleOpenMenu }) {
  const tablet = useMediaPredicate('(min-width: 1024px)');
  return (
    <>
      <header className={css.headerContainer}>
        <Link to={routes.main}>
          {/* <h1 className={css.logo}>AR</h1> */}
          <img
            className={css.sectionPhoto}
            src={photo}
            alt="your future employee"
            width="40"
            height="40"
          />
        </Link>
        <nav className={css.nav}>
          {tablet ? (
            <DesktopNav
              handleOpenMenu={handleOpenMenu}
              isOpenMenu={isOpenMenu}
            />
          ) : (
            <MobileNav
              handleOpenMenu={handleOpenMenu}
              isOpenMenu={isOpenMenu}
            />
          )}
        </nav>
      </header>
    </>
  );
}

export default Navigation;
