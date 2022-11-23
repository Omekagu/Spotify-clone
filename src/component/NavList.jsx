import React from 'react';

const NavList = ({ icon, title, className }) => {
  return (
    <div>
      <ul>
        <li className="navList">
          <i>{icon}</i>
          <p className={className}>{title}</p>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
