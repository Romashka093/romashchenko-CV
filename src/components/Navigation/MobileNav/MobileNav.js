import React from 'react';
import NavList from '../NavList/NavList';
import css from './MobileNav.module.css';

const MobileNav = ({ isOpenMenu, handleOpenMenu }) => {
  return (
    <>
      <div onClick={handleOpenMenu} className={css.navBurger}>
        <button className={css.navBurgerBtn}></button>
        <span
          className={isOpenMenu ? css.navBurgerBarClose : css.navBurgerBar}
        ></span>
      </div>
      {isOpenMenu && <NavList handleOpenMenu={handleOpenMenu} />}
    </>
  );
};

export default MobileNav;
