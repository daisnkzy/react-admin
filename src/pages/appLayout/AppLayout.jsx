import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';

import './appLayout.scss';
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
