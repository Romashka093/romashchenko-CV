import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import css from './Navigation.module.css';

function Navigation({ isOpenMenu, handleOpenMenu }) {
  const tablet = useMediaPredicate('(min-width: 1024px)');
  return (
    <nav className={css.nav}>
      {tablet ? (
        <DesktopNav />
      ) : (
        <MobileNav handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />
      )}
    </nav>
  );
}

export default Navigation;
