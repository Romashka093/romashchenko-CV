import React from 'react';
import NavList from '../NavList/NavList';
// import css from './DesktopNav.module.css';
function DesktopNav({ handleOpenMenu }) {
  return (
    <>
      <NavList handleOpenMenu={handleOpenMenu} />
    </>
  );
}

export default DesktopNav;
