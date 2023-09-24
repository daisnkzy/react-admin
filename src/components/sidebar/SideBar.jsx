import React from 'react';
import { NavLink } from 'react-router-dom';

import { navLists } from '../../data/datas';

import './sidebar.scss';
const SideBar = () => {
  return (
    <aside className="sidebar">
      <span className="logo">绿洲酒店</span>
      {navLists.map((list) => (
        <NavLink to={list.link} key={list.name} className="nav-list-link">
          <list.icon />
          {list.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
