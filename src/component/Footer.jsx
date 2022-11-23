import React from 'react';
import NavList from './NavList';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__list">
        <NavList title="legal" /> <NavList />
        <NavList title="privacy center" /> <NavList />
        <NavList title="privacy policy" /> <NavList />
        <NavList title="cookies" /> <NavList />
        <NavList title="about ads" />
      </div>

      <h3>© 2022 Spotify AB</h3>
    </div>
  );
};

export default Footer;
