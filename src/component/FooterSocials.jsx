import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react';
import NavList from './NavList';

const FooterSocials = () => {
  return (
    <div className="social">
      <div className="social__item">
        <div className="social__list">
          <NavList className="head" title=" Company" /> <NavList />
          <NavList title="About " /> <NavList />
          <NavList title="Jobs" /> <NavList />
          <NavList title=" For the Record" />
        </div>
        <div className="social__list">
          <NavList className="head" title="Communities" /> <NavList />
          <NavList title="For Artists" /> <NavList />
          <NavList title="Developers" /> <NavList />
          <NavList title="Advertising" />
          <NavList />
          <NavList title="Investors" />
          <NavList title="Vendors" />
        </div>
        <div className="social__list">
          <NavList className="head" title="Useful links" /> <NavList />
          <NavList title="Support" /> <NavList />
          <NavList title="Free Mobile App" />
        </div>
      </div>

      <div>
        <Instagram /> <Twitter />
        <Facebook />
      </div>
    </div>
  );
};

export default FooterSocials;
