import React, { useEffect, useState } from 'react';

import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';

import './header.scss';
import Logout from '../../features/authentication/Logout';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode]
  );
  return (
    <header className="header">
      <span>Taosir</span>
      <span className="toogle-icon" onClick={toggleMode}>
        {isDarkMode ? <CiLight /> : <MdOutlineDarkMode />}
      </span>
      <Logout />
    </header>
  );
};

export default Header;
