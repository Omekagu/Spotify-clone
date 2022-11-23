import {
  AddBox,
  FavoriteBorder,
  Home,
  LibraryMusic,
  Search,
} from '@mui/icons-material';
import React from 'react';
import Logo from './Logo';
import NavList from './NavList';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar__list">
        <NavList icon={<Home />} title="Home" />
        <NavList icon={<Search />} title="Search" />
        <NavList icon={<LibraryMusic />} title="Your Library" />
      </div>

      <div className="sidebar__list2">
        <NavList icon={<AddBox />} title="create playlists" />
        <NavList icon={<FavoriteBorder />} title="Liked song" />
      </div>

      <footer className="sidebar__footer">
        <p>cookies</p>
        <p>privacy</p>
      </footer>
    </div>
  );
};

export default Sidebar;
