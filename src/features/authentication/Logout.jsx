import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BiLoaderAlt } from 'react-icons/bi';
import { useLogout } from './useLogout';

const Logout = () => {
  const { isLoading, logout } = useLogout();

  return (
    <div
      className={` ${isLoading ? 'isLoading' : 'toogle-icon'}`}
      onClick={logout}
    >
      {isLoading ? <BiLoaderAlt /> : <FiLogOut />}
    </div>
  );
};

export default Logout;
