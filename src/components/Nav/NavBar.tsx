import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import GroupIcon from '@material-ui/icons/Group';
import './NavBar.css';

export const NavBar = () => {
  const location = useLocation();

  return (
    <BottomNavigation>
      <NavLink to="/">
        <BottomNavigationAction selected={location.pathname === '/'} label="Tabela kalorii" icon={<FastfoodIcon />} />
      </NavLink>
      <NavLink to="/users">
        <BottomNavigationAction selected={location.pathname === '/users'} label="Użytkownicy" icon={<GroupIcon />} />
      </NavLink>
    </BottomNavigation>
  );
}