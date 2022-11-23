import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React from 'react';
import NavList from './NavList';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <ArrowBackIos className="icon" />

        <ArrowForwardIos className="icon" />
      </div>

      <div className="header__right">
        <NavList className="header__list" title="premium" />
        <NavList className="header__list" title="support" />
        <NavList className="header__list" title="download" />

        <p className="header__sign">sign up</p>
        <p className="header__login">Login</p>
      </div>
    </header>
  );
};

export default Header;
